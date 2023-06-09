import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../redux/actions/ui";
import { Summary } from "./Summary";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    with: "320px",
  },
};
export const SummaryModal = () => {
  Modal.setAppElement("#root");
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(uiCloseModal());
  };
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
    >
      <section>
        <Summary lastStep={false} />
      </section>
    </Modal>
  );
};
