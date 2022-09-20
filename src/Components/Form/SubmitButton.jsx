import "./SubmitButton.css";

function SubmitButton({ text }) {
  return (
    <div className="btn_container">
        <button className="btn">{text}</button>
    </div>
  );
}

export default SubmitButton;