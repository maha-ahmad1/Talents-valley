import { Buttonstyle } from "./Card/CardStyle";

export default function Button({ text = "", type = "submit", className='' }) {
  return (
    <>
      <Buttonstyle className={className} type={type}>
        {text}
      </Buttonstyle>
    </>
  );
}
