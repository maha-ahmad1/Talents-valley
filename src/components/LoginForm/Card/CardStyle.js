import styled from "styled-components";
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
  // display: block;
  // background: #ffffff 0% 0% no-repeat padding-box;
  // box-shadow: 0px 3px 6px #00000029;
  // border-radius: 20px;
  // padding: 32px 101px;
  // text-align: left;
  // width: 550px;
  // height: 621px;
  // margin: auto;

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
  margin-top: 70px;
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
  font: normal normal 600 18px/27px Segoe UI;
  width: 100%;
  color: #151617;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Verificationdiv = styled.div`
  display: flex;
  justfiy-content: center;
  width: 100%;
  height: 88px;
  background: #f3f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 7px;
`;
