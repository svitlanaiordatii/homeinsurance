import useDialogFunctions from "../useDialogFunctions";
import useStore from "../../../store/store";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import objectKeys from "../../../utils/ojectKeys";
import { checkList } from "../../../constants/checkList";

const DialogInsuranceType = () => {
  const [error, setError] = useState("");
  const { data, setData } = useStore();
  const { stepInc, stepDec } = useDialogFunctions();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    if (data?.location) {
      const dataToSet = {
        ...data,
        insurance: {
          ...data?.insurance,
          [event.target.value]: event.target.checked,
        },
      };
      setData(dataToSet);
      sessionStorage.setItem("data", JSON.stringify(dataToSet));
    }
  };
  const handleNext = () => {
    if (data?.insurance && Object.values(data.insurance).includes(true)) {
      stepInc();
    } else {
      setError("Please choose at least one option");
    }
  };
  return (
    <motion.div
      layout
      className="basic-modal__content-inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="h2">What type of project are you looking for?</h2>
      <p className="dialog-helper-text">Select all that aply</p>
      <form className="dialog-checkbox-form">
        {objectKeys(checkList).map((el) => (
          <div className="checkbox-wrap" key={el}>
            <input
              checked={
                data && data.insurance && data.insurance[el]
                  ? data.insurance[el]
                  : false
              }
              onChange={handleChange}
              className="checkbox-input"
              type="checkbox"
              id={el}
              value={el}
            />
            <label className="checkbox-label" htmlFor={el}>
              {checkList[el]}
            </label>
          </div>
        ))}
        <AnimatePresence>
          {error && (
            <motion.div
              className="basic-error-message"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "Inertia" }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <div className="dialog-btn-wrap">
        <button className="dialog-btn dialog-btn-secondary" onClick={stepDec}>
          Back
        </button>
        <button className="dialog-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default DialogInsuranceType;
