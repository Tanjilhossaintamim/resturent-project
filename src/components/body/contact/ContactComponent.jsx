import axios from "axios";
import { LocalForm, Control, Errors } from "react-redux-form";
import { FormGroup, Col, Button } from "reactstrap";
import { baseUrl } from "../../../redux/baseURL";
import { useState } from "react";
import { Alert } from "reactstrap";

const required = (value) => value && value.length;
const validNumber = (value) => /^(?:\+88|88)?(01[3-9]\d{8})$/.test(value);
const validEmail = (value) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value);
const ContactComponent = () => {
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const handelSubmit = (value) => {
    axios
      .post(baseUrl + "feedback", value)
      .then((response) => response.status)
      .then((status) => {
        if (status == 201) {
          setAlertShow(true);
          setAlertMessage("Submitted successfully !");
          setAlertType("success");
          setTimeout(() => {
            setAlertShow(false);
          }, 2000);
        }
      });
  };
  return (
    <div className="container my-5">
      <h1 className="text-center">Send Us Your Message</h1>
      <Alert isOpen={alertShow} color={alertType}>
        {alertMessage}
      </Alert>
      <LocalForm className="mx-auto" onSubmit={(value) => handelSubmit(value)}>
        <Col>
          <FormGroup>
            <Control.text
              model={".firstname"}
              name="firstname"
              placeholder="FirstName"
              className="form-control"
              validators={{
                required,
              }}
            ></Control.text>
            <Errors
              model={".firstname"}
              show="touched"
              messages={{ required: "Filed Must required" }}
              className="text-danger mt-1"
            ></Errors>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Control.text
              model={".lastname"}
              name="lastname"
              placeholder="LastName"
              className="form-control"
              validators={{
                required,
              }}
            ></Control.text>
            <Errors
              model={".lastname"}
              show="touched"
              messages={{ required: "Filed Must required" }}
              className="text-danger mt-1"
            ></Errors>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Control.text
              model={".email"}
              name="email"
              placeholder="Email"
              className="form-control"
              validators={{
                required,
                validEmail,
              }}
            ></Control.text>
            <Errors
              model={".email"}
              show="touched"
              messages={{ required: "", validEmail: "Email Not Valid !" }}
              className="text-danger mt-1"
            ></Errors>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Control.text
              model={".telnum"}
              name="telnum"
              placeholder="Phone Number"
              className="form-control"
              validators={{
                required,
                validNumber,
              }}
            ></Control.text>
            <Errors
              model={".telnum"}
              show="touched"
              messages={{ required: "", validNumber: "number Not Valid !" }}
              className="text-danger mt-1"
            ></Errors>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Control.textarea
              model={".message"}
              name="message"
              placeholder="Message"
              className="form-control"
              validators={{
                required,
              }}
            ></Control.textarea>
            <Errors
              model={".message"}
              show="touched"
              messages={{ required: "Field Must required !" }}
              className="text-danger mt-1"
            ></Errors>
          </FormGroup>
        </Col>
        <Button type="submit">Send</Button>
      </LocalForm>
    </div>
  );
};

export default ContactComponent;
