import React from "react";

import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";

const Registration = (props) => {
  //meta title
  document.title =
    "Form Layouts | Skote - Vite React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container
          fluid={true}
          style={{
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1080,
          }}
        >
          <Breadcrumbs title="User" breadcrumbItem="Registration" />
          <Row>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">Registration Form</CardTitle>
                <Form>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">
                          Select State (Head Quarter)
                        </Label>
                        <div className="col-sm-auto">
                          <label
                            className="visually-hidden"
                            htmlFor="autoSizingSelect"
                          >
                            Preference
                          </label>
                          <select defaultValue="0" className="form-select">
                            <option selected="selected" value="0">
                              -- Select State --
                            </option>
                            <option value="35">ANDAMAN AND NICOBAR</option>
                            <option value="28">ANDHRA PRADESH</option>
                            <option value="12">ARUNACHAL PRADESH</option>
                            <option value="18">ASSAM</option>
                            <option value="10">BIHAR</option>
                            <option value="4">CHANDIGARH</option>
                            <option value="22">CHHATTISGARH</option>
                            <option value="26">DADRA AND NAGAR HAVELI</option>
                            <option value="25">DAMAN AND DIU</option>
                            <option value="30">GOA</option>
                            <option value="24">GUJARAT</option>
                            <option value="6">HARYANA</option>
                            <option value="2">HIMACHAL PRADESH</option>
                            <option value="1">JAMMU AND KASHMIR</option>
                            <option value="20">JHARKHAND</option>
                            <option value="29">KARNATAKA</option>
                            <option value="32">KERALA</option>
                            <option value="31">LAKSHADWEEP</option>
                            <option value="23">MADHYA PRADESH</option>
                            <option value="27">MAHARASHTRA</option>
                            <option value="14">MANIPUR</option>
                            <option value="17">MEGHALAYA</option>
                            <option value="15">MIZORAM</option>
                            <option value="13">NAGALAND</option>
                            <option value="7">NEW DELHI</option>
                            <option value="21">ODISHA</option>
                            <option value="34">PONDICHERRY</option>
                            <option value="3">PUNJAB</option>
                            <option value="8">RAJASTHAN</option>
                            <option value="11">SIKKIM</option>
                            <option value="33">TAMIL NADU</option>
                            <option value="36">TELANGANA</option>
                            <option value="16">TRIPURA</option>
                            <option value="9">UTTAR PRADESH</option>
                            <option value="5">UTTARAKHAND</option>
                            <option value="19">WEST BENGAL</option>
                          </select>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">
                          Select District
                        </Label>
                        <div className="col-sm-auto">
                          <label
                            className="visually-hidden"
                            htmlFor="autoSizingSelect"
                          >
                            Preference
                          </label>
                          <select defaultValue="0" className="form-select">
                            <option value="0">-- Select District --</option>
                            <option value="610">ARIYALUR</option>
                            <option value="568">CHENNAI</option>
                            <option value="569">COIMBATORE</option>
                            <option value="570">CUDDALORE</option>
                            <option value="571">DHARMAPURI</option>
                            <option value="572">DINDIGUL</option>
                            <option value="573">ERODE</option>
                            <option value="574">KANCHIPURAM</option>
                            <option value="575">KANNIYAKUMARI</option>
                            <option value="576">KARUR</option>
                            <option value="577">KRISHNAGIRI</option>
                            <option value="578">MADURAI</option>
                            <option value="579">NAGAPATTINAM</option>
                            <option value="580">NAMAKKAL</option>
                            <option value="581">PERAMBALUR</option>
                            <option value="582">PUDUKKOTTAI</option>
                            <option value="583">RAMANATHAPURAM</option>
                            <option value="584">SALEM</option>
                            <option value="585">SIVAGANGA</option>
                            <option value="586">THANJAVUR</option>
                            <option value="587">THE NILGIRIS</option>
                            <option value="588">THENI</option>
                            <option value="621">THIRUPPUR</option>
                            <option value="589">THIRUVALLUR</option>
                            <option value="590">THIRUVARUR</option>
                            <option value="591">TIRUCHIRAPPALLI</option>
                            <option value="592">TIRUNELVELI</option>
                            <option value="593">TIRUVANNAMALAI</option>
                            <option value="594">TUTICORIN</option>
                            <option value="595">VELLORE</option>
                            <option value="596">VILLUPURAM</option>
                            <option value="597">VIRUDHUNAGAR</option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="mb-3">
                    <div className="mb-3">
                      <Label htmlFor="formrow-email-Input">
                        Select Type / Class of the Society
                      </Label>
                      <div className="col-sm-auto">
                        <label
                          className="visually-hidden"
                          htmlFor="autoSizingSelect"
                        >
                          Preference
                        </label>
                        <select defaultValue="0" className="form-select">
                          <option selected="selected" value="0">
                            -- Select Type --
                          </option>
                          <option value="4">Agro</option>
                          <option value="16">Construction</option>
                          <option value="15">Consumer</option>
                          <option value="8">Cooperative Bank</option>
                          <option value="1">Credit</option>
                          <option value="3">Dairy</option>
                          <option value="24">Export</option>
                          <option value="19">Federation</option>
                          <option value="13">Fisheries</option>
                          <option value="18">Health/Hospital</option>
                          <option value="6">Housing</option>
                          <option value="17">Industrial/Textile</option>
                          <option value="21">Labour</option>
                          <option value="5">Marketing</option>
                          <option value="2">Multi Purpose</option>
                          <option value="10">National Federation</option>
                          <option value="23">Organic</option>
                          <option value="9">Others</option>
                          <option value="22">Seed</option>
                          <option value="7">Technical</option>
                          <option value="12">Tourism</option>
                          <option value="11">Transport</option>
                          <option value="14">Welfare</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Label htmlFor="formrow-firstname-Input">Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="formrow-firstname-Input"
                      placeholder="Enter the Name"
                    />
                  </div>

                  <div className="mb-3">
                    <Label htmlFor="formrow-firstname-Input">
                      Complete Registered Address (with PIN code)
                    </Label>
                    <Input
                      type="textarea"
                      id="textarea"
                      onChange={(e) => {
                        textareachange(e);
                      }}
                      maxLength="225"
                      rows="3"
                      placeholder="Enter the Complete Registered Address"
                    />
                  </div>

                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">PAN Number</Label>
                        <Input
                          type="number"
                          className="form-control"
                          id="formrow-email-Input"
                          placeholder="Enter Your PAN Number"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-password-Input">
                          TAN Number
                        </Label>
                        <Input
                          type="number"
                          className="form-control"
                          id="formrow-email-Input"
                          placeholder="Enter Your TAN Number"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">
                          Name of MD/Chairman/Vice Chairman/ Officers Authorized
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-email-Input"
                          placeholder="Enter the Name of MD/Chairman/Vice Chairman/ Officers Authorized"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-password-Input">
                          Designation
                        </Label>
                        <div className="col-sm-auto">
                          <label
                            className="visually-hidden"
                            htmlFor="autoSizingSelect"
                          >
                            Preference
                          </label>
                          <select defaultValue="0" className="form-select">
                            <option selected="selected" value="0">
                              -- Select Designation --
                            </option>
                            <option value="8 ">Chairman / President</option>
                            <option value="11">
                              Vice Chairman / Vice President
                            </option>
                            <option value="12">Managing Director / CEO</option>
                            <option value="13">Co-Opted Director</option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">
                          Mobile Number of Authorized Officer
                        </Label>
                        <Input
                          type="text"
                          pattern="\d*"
                          maxlength="4"
                          className="form-control"
                          id="formrow-email-Input"
                          placeholder="Enter Mobile Number of Authorized Officer"
                          maxLength={10}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">Email</Label>
                        <Input
                          type="email"
                          className="form-control"
                          id="formrow-email-Input"
                          placeholder="Enter Your Email ID"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row style={{ justifyContent: "flex-end" }}>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">
                          Service Tax Number
                        </Label>
                        <Input
                          type="text"
                          pattern="\d*"
                          maxlength="4"
                          className="form-control"
                          id="formrow-email-Input"
                          placeholder="Enter Service Tax Number"
                          maxLength={10}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-password-Input">Password</Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="formrow-password-Input"
                          placeholder="Enter Your Password"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-password-Input">
                          Confirm Password
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="formrow-password-Input"
                          placeholder="Confirm Your Password"
                        />
                      </div>
                    </Col>
                  </Row>

                  <div className="mb-3">
                    <div className="form-check">
                      <Input
                        type="checkbox"
                        className="form-check-Input"
                        id="formrow-customCheck"
                      />
                      <Label
                        className="form-check-Label"
                        htmlFor="formrow-customCheck"
                      >
                        I agree to the terms & conditions
                      </Label>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary w-md">
                      Submit
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Row>
        </Container>
        {/* container-fluid */}
      </div>
    </React.Fragment>
  );
};

export default Registration;
