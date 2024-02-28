import useDialogFunctions from "../useDialogFunctions";
import useStore from "../../../store/store";
import { motion } from "framer-motion";

const DialogConfirmLocation = () => {
  const { data } = useStore();
  const { stepInc, handleClose } = useDialogFunctions();
  return (
    <motion.div
      layout
      className="basic-modal__content-inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="h2">Please confirm your location</h2>
      <p>Is it {data?.location}?</p>
      <div className="dialog-btn-wrap">
        <button
          className="dialog-btn dialog-btn-secondary"
          onClick={handleClose}
        >
          No
        </button>
        <button className="dialog-btn" onClick={stepInc}>
          Correct
        </button>
      </div>
    </motion.div>
  );
};

export default DialogConfirmLocation;
