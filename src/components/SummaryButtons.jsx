export const SummaryButtons = ({ lastStep, sendForm, closeModal }) => {
  return lastStep ? (
    <button onClick={sendForm} className="summary-send-button">
      Enviar
    </button>
  ) : (
    <button className="summary-close-button" onClick={closeModal}>
      Cerrar
    </button>
  );
};
