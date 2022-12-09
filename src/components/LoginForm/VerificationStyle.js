import {
  Verificationdiv,
  Verifyh1,
  Verifyhp,
  Span,
  Button,
  Buttondiv,
  Verifydiv,
  Styleverify,
  Styleddiv,
  StyledCheck,
} from "./Card/CardStyle";
import check from "../../assets/images/check.png";

export default function VerificationStyle({
  texth1 = "",
  textp = "",
  textspan = "",
  button = "",
  verified = "",
  value = "",
}) {
  return (
    <>
      <Verificationdiv>
        <Verifydiv>
          <Verifyhp>
            <Verifyh1>{texth1}</Verifyh1>
            {verified ? (
              <Verifyhp>
                {value}
                <Styleverify> (Verified)</Styleverify>
              </Verifyhp>
            ) : (
              <Verifyhp>
                {textp}
                <Span> {textspan}</Span>
              </Verifyhp>
            )}
            {/* {verified ? (
              <Styleverify>(Verified)</Styleverify>
            ) : (
              <Span>{textspan}</Span>
            )} */}
          </Verifyhp>
        </Verifydiv>
        <Buttondiv>
          {verified ? (
            <Styleddiv>
              <StyledCheck src={check} alt="check" />
            </Styleddiv>
          ) : (
            <Button type="submit">{button}</Button>
          )}
        </Buttondiv>
      </Verificationdiv>
    </>
  );
}
