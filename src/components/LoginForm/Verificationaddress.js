import Navbar from "../../components/Nav/Navbar";
import Card from "./Card/Card";
import Button from "./Button";
import {
  Title,
  Divemail,
  Paragraph2,
  Label,
  StyleddropDown,
  Styledbtn,
  Styledinput,
} from "./Card/CardStyle";
import Idcard from "../../assets/images/Idcard.png";
import DropDown from "./DropDown";
import InputField from "./Input";
import { BsUpload } from "react-icons/bs";
import address from "../../assets/images/address.png";
export default function Verificationaddress() {
  return (
    <>
      <Navbar />
      <Card>
        <Title>ID Verification</Title>
        <Divemail>
          <img src={address} alt="Email" />
        </Divemail>
        <Paragraph2>
          Upload Document that Proof your Identity such as: Identity
          Card,Passport, Driver License
        </Paragraph2>
        <Label>Document Type</Label>
        <StyleddropDown>
          <DropDown
            items={[
              { id: "0", label: "Identity Card" },
              { id: "1", label: "Passport" },
              { id: "2", label: "Driver License" },
            ]}
          />
        </StyleddropDown>

        {/* <label for="pet-select">Choose a pet:</label>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select> */}
        <Label>ID Number</Label>
        <InputField
          type="email"
          placeholder="Enter your ID number"
          name="email"
        />
        {/* <Input1 type="file" placeholder="Enter your ID number" name="email" /> */}
        <Styledbtn type="button" class="btn-warning">
          <BsUpload /> Upload a File
          <Styledinput type="file" />
        </Styledbtn>
        <Button text="Continue" />
      </Card>
    </>
  );
}
