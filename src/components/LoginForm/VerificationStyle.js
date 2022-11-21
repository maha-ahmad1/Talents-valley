import {
  Verificationdiv,
  Verifyh1,
  Verifyhp,
  Span,
  Button,
  Buttondiv,
  Verifydiv,
} from "./Card/CardStyle";

export default function VerificationStyle({
  texth1 = "",
  textp = "",
  textspan = "",
  button = "",
}) {
  return (
    <>
      <Verificationdiv>
        <Verifydiv>
          <Verifyh1>{texth1}</Verifyh1>
          <Verifyhp>
            {textp}
            <Span>{textspan}</Span>
          </Verifyhp>
        </Verifydiv>
        <Buttondiv>
          <Button type="submit">{button}</Button>
        </Buttondiv>
      </Verificationdiv>
    </>
  );
}
