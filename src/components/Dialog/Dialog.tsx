import { forwardRef } from "react";
import "./Dialog.css";
import { Modal } from "@mui/base/Modal";
import { prepareForSlot } from "@mui/base/utils";
import { motion } from "framer-motion";
import useStore from "../../store/store";
import useDialogFunctions from "./useDialogFunctions";

type Props = {
  children: JSX.Element;
};

const Backdrop = forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    open && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className={className} ref={ref} {...other} />
      </motion.div>
    )
  );
});

const LinkSlot = prepareForSlot(Backdrop);

const Dialog = ({ children }: Props) => {
  const { modal } = useStore();
  const { handleClose } = useDialogFunctions();
  return (
    <>
      <Modal
        // aria-labelledby="unstyled-modal-title"
        // aria-describedby="unstyled-modal-description"
        open={modal ? true : false}
        onClose={handleClose}
        className="basic-modal"
        slots={{ backdrop: LinkSlot }}
      >
        <motion.div
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: 0 }}
          className="motion"
        >
          {children}
        </motion.div>
      </Modal>
    </>
  );
};

export default Dialog;
