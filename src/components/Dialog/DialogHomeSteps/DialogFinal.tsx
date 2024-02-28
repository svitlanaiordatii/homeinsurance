import useDialogFunctions from "../useDialogFunctions";
import email from "@/assets/img/email.svg";
import { motion } from "framer-motion";

const DialogFinal = () => {
  const { handleClose, stepDec } = useDialogFunctions();
  return (
    <motion.div
      layout
      className="basic-modal__content-inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="h2">Congrats!</h2>
      <p>An email with best insurance offers for you is on its way!</p>
      <img
        className="final-image"
        src={email}
        alt="house1"
        height="117px"
        width="350px"
      />
      <div className="dialog-btn-wrap">
        <div className="dialog-btn dialog-btn-secondary" onClick={stepDec}>
          Back
        </div>
        <button className="dialog-btn" onClick={handleClose}>
          Done
        </button>
      </div>
    </motion.div>
  );
};

export default DialogFinal;
