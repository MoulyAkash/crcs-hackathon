import React from "react";
import { Col, Card, CardBody } from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";

//Import Images
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";

const TrainingProgram = () => {
  return (
    <SimpleBar style={{ maxHeight: "390px" }}>
      <ul className="list-group">
        <li className="list-group-item border-0">
          <div className="d-flex">
            <div className="avatar-xs me-3">
              <span className="avatar-title rounded-circle bg-light">
                <img src={img3} alt="" height="18" />
              </span>
            </div>
            <div className="flex-grow-1">
              <h5 className="font-size-14">
                Women Empowerment and Gender Sensitization
              </h5>
              <p className="text-muted">
                Training programs focused on empowering women members of
                cooperative societies, promoting gender equality, leadership
                development, and enhancing their participation in
                decision-making processes.
              </p>

              <div className="float-end">
                <p className="text-muted mb-0">
                  <i className="mdi mdi-account me-1" /> Munnuswammy
                </p>
              </div>
              <p className="text-muted mb-0">12 Mar, 2020</p>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
          <div className="d-flex">
            <div className="avatar-xs me-3">
              <span className="avatar-title rounded-circle bg-light">
                <img src={img1} alt="" height="18" />
              </span>
            </div>
            <div className="flex-grow-1">
              <h5 className="font-size-14">
                Agricultural Practices and Farming Techniques
              </h5>
              <p className="text-muted">
                Training programs aimed at improving agricultural practices,
                modern farming techniques, crop diversification, organic
                farming, soil health management, and pest control methods.
              </p>

              <div className="float-end">
                <p className="text-muted mb-0">
                  <i className="mdi mdi-account me-1" /> Arvindh
                </p>
              </div>
              <p className="text-muted mb-0">12 Mar, 2020</p>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
          <div className="d-flex">
            <div className="avatar-xs me-3">
              <span className="avatar-title rounded-circle bg-light">
                <img src={img2} alt="" height="18" />
              </span>
            </div>
            <div className="flex-grow-1">
              <h5 className="font-size-14">
                Cooperative Marketing and Value Chain Management
              </h5>
              <p className="text-muted">
                Workshops on cooperative marketing strategies, market linkages,
                branding, packaging, quality control, and value chain management
                for agricultural produce and other cooperative products.
              </p>

              <div className="float-end">
                <p className="text-muted mb-0">
                  <i className="mdi mdi-account me-1" /> JayaShree
                </p>
              </div>
              <p className="text-muted mb-0">13 Mar, 2020</p>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
          <div className="d-flex">
            <div className="avatar-xs me-3">
              <span className="avatar-title rounded-circle bg-light">
                <img src={img3} alt="" height="18" />
              </span>
            </div>
            <div className="flex-grow-1">
              <h5 className="font-size-14">
                Skill Development and Vocational Training
              </h5>
              <p className="text-muted">
                Training initiatives aimed at skill development and vocational
                training in various sectors such as handicrafts, handloom,
                textiles, dairy farming, food processing, and other cottage
                industries.
              </p>

              <div className="float-end">
                <p className="text-muted mb-0">
                  <i className="mdi mdi-account me-1" /> Calvin Mohammed
                </p>
              </div>
              <p className="text-muted mb-0">14 Mar, 2020</p>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
          <div className="d-flex">
            <div className="avatar-xs me-3">
              <span className="avatar-title rounded-circle bg-light">
                <img src={img1} alt="" height="18" />
              </span>
            </div>
            <div className="flex-grow-1">
              <h5 className="font-size-14">
                Information Technology and Digital Skills
              </h5>
              <p className="text-muted">
                Training sessions on basic computer skills, digital literacy,
                internet usage, and adoption of digital technologies for
                improving cooperative operations, record-keeping, and
                communication.
              </p>

              <div className="float-end">
                <p className="text-muted mb-0">
                  <i className="mdi mdi-account me-1" /> Joseph Vijay
                </p>
              </div>
              <p className="text-muted mb-0">12 Mar, 2020</p>
            </div>
          </div>
        </li>
      </ul>
    </SimpleBar>
  );
};

export default TrainingProgram;
