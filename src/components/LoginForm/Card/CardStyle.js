import styled from "styled-components/macro";
import { IoIosArrowBack } from "react-icons/io";
// import InputField from '../../LoginForm/Input';
//import { createGlobalStyle } from 'styled-components'

// export const GlobalStyle = createGlobalStyle`
// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }
// body {
//   font-family: Segoe UI,Tahoma,Geneva,Verdana,sans-serif;
//   color: red;
//   }
// `
export const Container = styled.div`
  display: block;
  padding: 32px 80px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  width: 600px;
  text-align: left;
  min-height: 650px;
`;

export const Flex = styled.div`
  background: #f3f4f6;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
`;

export const Arrow = styled(IoIosArrowBack)`
  width: 27px;
  height: 27px;
  color: #000000;
  margin-bottom: -76px;
  margin-left: -9px;
`;

export const Input = styled.input`
  padding: 16px;
  border: 1px solid #bec2c6;
  border-radius: 7px;
  outline-color: rgb(146, 174, 250);
  font-size: 16px;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const InputField1 = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: #707070;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

export const Paragraph = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 50px 0 15px 0;
`;

export const Paragraph2 = styled.p`
  color: #707070;
  font-size: 16px;
  margin-bottom: 50px;
  font-weight: 600;
`;

export const Resend = styled.input`
  padding: 25px;
  border: 1px solid #bec2c6;
  border-radius: 7px;
  outline-color: rgb(146, 174, 250);
  font-size: 16px;
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0px 2px 2px #00000029;
`;


export const SendInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const SendInput1 = styled.div`
  display: flex;
  justify-content: center;
`;
export const SendInput2 = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputPassword = styled.div`
  width: 100%;
  position: relative;
`;

export const Eye = styled.span`
  position: absolute;
  right: 20px;
  top: 25px;
  font-size: 25px;
  color: #00000029;
`;

export const Check = styled.img`
  margin-top: 50px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h1`
  margin-top: 25px;
  margin-bottom: 30px;
  font: normal normal 600 25px/33px Segoe UI;
  letter-spacing: 0.5px;
  color: #000000;
`;
export const ParagraphR = styled.h1`
  font: normal normal 600 18px/27px Segoe UI;
  color: #707070;
  display: flex;
  justify-content: center;
`;

export const Pcreate = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 50px 0 30px 0;
`;

export const Title = styled.h1`
  font: normal normal 600 30px/40px Segoe UI;
  letter-spacing: 0px;
  color: #151617;
  display: flex;
  justify-content: center;
`;

export const Verificationh1 = styled.h1`
  font: normal normal 600 18.5px/27px Segoe UI;
  width: 100%;
  color: #151617;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Verificationdiv = styled.div`
  display: flex;
  width: 100%;
  height: 88px;
  background: #f3f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 7px;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 15px;
`;
export const Verifydiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 279px;
`;
export const Verifyh1 = styled.h1`
  font: normal normal normal 18px/24px Segoe UI;
  color: #151617;
`;

export const Verifyhp = styled.p`
  font: normal normal normal 14px/19px Segoe UI;
`;

export const Buttonstyle = styled.button`
  width: 100%;
  //width:${(props) => (props.large ? "500px" : "200px")}
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background: #4375ff;
  //  background:${(props) =>
    props.variant === "outline" ? "#4375ff" : "#ffff"}
  color: #fff;
  font-weight: 500;
  font-size: 25px;
  border-radius: 7px;
  height: 60px;
  margin-top: 75px;
  margin-bottom: 60px;
  cursor: pointer;
`;
export const Buttondiv = styled.div`
  display: flex;
  // padding-left: 100px;
`;

export const Button = styled.button`
  background: #4375ff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 7px;
  width: 114px;
  height: 31px;
  font: normal normal normal 14px/19px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  cursor: pointer;
`;
export const Span = styled.span`
  color: #e80707;
`;

export const Divp = styled.div`
  margin-bottom: 15px;
  font: normal normal normal 14px/19px Segoe UI;
  color: #151617;
`;

export const Divemail = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  margin-top: 30px;
  margin-bottom: 40px;
`;
export const Divs = styled.div`
  display: flex;
  text-align: center;
  margin-top: 35px;
  justify-content: center;
`;

export const Paragraphs = styled.h1`
  font: normal normal 600 18px/27px Segoe UI;
  color: #707070;
  width: 250px;
  line-height: 1.8;
`;
