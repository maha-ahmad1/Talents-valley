import "./Button.css";
export default function Button({ text }) {
  return (
    <>
      <button className="button" type="submit">
        {text}
      </button>
    </>
  );
}
