import useDialogFunctions from "../useDialogFunctions";
import useStore from "../../../store/store";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { string } from "yup";
import useAddToFirestore from "../../../hooks/useAddToFirestore";

const DialogEmail = () => {
  const { addToFirestore, fireStoreLoading, firestoreError } =
    useAddToFirestore();
  const { stepDec, stepInc } = useDialogFunctions();
  const { data, setData } = useStore();
  const [email, setEmail] = useState(data?.email ? data.email : "");
  const [error, setError] = useState("");
  const emailSchema = string().email();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error || fireStoreLoading) return;
    if (data && email) {
      const isValid = await emailSchema.isValid(email);
      if (isValid) {
        setError("");
        const dataToSet = {
          ...data,
          email: email,
        };
        setData(dataToSet);
        sessionStorage.setItem("data", JSON.stringify(dataToSet));
        await addToFirestore(dataToSet);
        stepInc();
      } else {
        setError("Please enter a valid email");
      }
    } else {
      setError("Please fill in your email");
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
      <h2 className="h2">Thank you!</h2>
      <p className="dialog-helper-text">
        Leave your email to get the best insurance offers near you
      </p>
      <form id="emailform" onSubmit={handleSubmit} noValidate>
        <div className="basic-input-wrap">
          <label className="basic-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="basic-input"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
            autoComplete="on"
          />
        </div>
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
          {firestoreError && (
            <motion.div
              className="basic-error-message"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "Inertia" }}
            >
              {firestoreError}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <div className="dialog-btn-wrap">
        <div className="dialog-btn dialog-btn-secondary" onClick={stepDec}>
          Back
        </div>
        <button type="submit" className="dialog-btn" form="emailform">
          {fireStoreLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </motion.div>
  );
};

export default DialogEmail;
