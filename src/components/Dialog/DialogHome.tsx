import Dialog from "./Dialog";
import useStore from "../../store/store";
import { motion } from "framer-motion";
import DialogConfirmLocation from "./DialogHomeSteps/DialogConfirmLocation";
import DialogInsuranceType from "./DialogHomeSteps/DialogInsuranceType";
import DialogEmail from "./DialogHomeSteps/DialogEmail";
import DialogFinal from "./DialogHomeSteps/DialogFinal";

const DialogHome = () => {
  const { modal } = useStore();
  return (
    <Dialog>
      <motion.div layout transition={{ duration: 0.2 }}>
        <div className="basic-modal__content">
          {modal === 1 && <DialogConfirmLocation />}
          {modal === 2 && <DialogInsuranceType />}
          {modal === 3 && <DialogEmail />}
          {modal === 4 && <DialogFinal />}
        </div>
      </motion.div>
    </Dialog>
  );
};

export default DialogHome;
