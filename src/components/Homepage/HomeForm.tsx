import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useValidateZip from "./useValidateZip";
import useStore from "../../store/store";
import useDialogFunctions from "../Dialog/useDialogFunctions";
import LocationIco from "./LocationIco";
import "@/assets/css/forms.css";

type Props = {
  formLocation: "hero" | "footer";
  zip: string;
  setZip: React.Dispatch<React.SetStateAction<string>>;
};
const HomeForm = ({ formLocation, zip, setZip }: Props) => {
  const { data, setData } = useStore();
  const { validateZip, loadingZip, validateZipError } = useValidateZip();
  const { handleOpen } = useDialogFunctions();

  const [error, setError] = useState("");
  const basicZipValidation = (zipCode: string) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  };
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    e.target.validity.valid
      ? setZip(e.target.value)
      : setError("Only numbers are allowed");
  };
  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loadingZip) return;
    if (basicZipValidation(zip)) {
      const zipData = await validateZip(zip);
      if (zipData) {
        const dataToSet = {
          ...data,
          location: zipData.city + ", " + zipData.state,
          zip: zip,
        };
        setData(dataToSet);
        sessionStorage.setItem("data", JSON.stringify(dataToSet));
        handleOpen();
      } else {
        setError(
          validateZipError
            ? validateZipError
            : "Please enter a valid US zip code"
        );
      }
    } else {
      setError("Please enter a valid US zip code");
    }
  };
  return (
    <>
      <form className="hero-form" onSubmit={formSubmit}>
        <label
          htmlFor={`${formLocation}-input`}
          className={`hero-form-label ${formLocation}-form-label`}
        >
          Your zip code (US only)
        </label>
        <div className="hero-form-content">
          <div className="zip-wrap">
            <label
              htmlFor={`${formLocation}-input`}
              style={{ cursor: "pointer" }}
            >
              <LocationIco />
            </label>
            <input
              id={`${formLocation}-input`}
              type="tel"
              className={`zip-field${
                formLocation === "footer" ? " field-bottom" : ""
              }`}
              name="zip"
              maxLength={5}
              placeholder="Enter your zip"
              value={zip}
              pattern="[0-9]+"
              onChange={inputChange}
              autoComplete="on"
            />
          </div>
          <button
            className={`hero-cta${
              formLocation === "footer" ? " cta-bottom" : ""
            }`}
          >
            {loadingZip ? "Loading..." : "Get The Best Rate"}
          </button>
          <AnimatePresence>
            {error && (
              <motion.div
                className={`basic-error-message hero-error${
                  formLocation === "footer" ? " color-white" : ""
                }`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "Inertia" }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </>
  );
};

export default HomeForm;
