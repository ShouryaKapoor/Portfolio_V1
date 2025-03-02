import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:shouryakapoor13@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:shouryakapoor13@gmail.com">shouryakapoor13@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918448830230"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918448830230">(+91) 8448830230</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}