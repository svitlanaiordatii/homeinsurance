import useStore from "../../store/store";

const useDialogFunctions = () => {
  const { setModal, modal, setData } = useStore();
  const handleOpen = () => {
    setModal(1);
    sessionStorage.setItem("modal", JSON.stringify(1));
  };

  const handleClose = () => {
    setModal(undefined);
    sessionStorage.removeItem("modal");
    sessionStorage.removeItem("data");
    setData(undefined);
  };

  const stepInc = () => {
    if (modal) {
      setModal(modal + 1);
      sessionStorage.setItem("modal", JSON.stringify(modal + 1));
    }
  };
  const stepDec = () => {
    if (modal) {
      setModal(modal - 1);
      sessionStorage.setItem("modal", JSON.stringify(modal - 1));
    }
  };
  return { handleOpen, handleClose, stepInc, stepDec };
};

export default useDialogFunctions;
