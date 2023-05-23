export const SummaryButtons = (lastStep, sendForm, closeModal) => {
  return lastStep ? (
    <button className="summary-send-button" onClick={sendForm}>
      Enviar
    </button>
  ) : (
    <button className="summary-close-button" onClick={closeModal}>
      Cerrar
    </button>
  );
};
