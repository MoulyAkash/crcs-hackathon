import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//SimpleBar
import SimpleBar from "simplebar-react";

const data = [
  {
    link: "/MSCS/UploadsDocs/Circulars/Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd_dated 05.06.2023.pdf",
    text: "Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023.pdf",
    date: "01 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Liquidator_extension_order.pdf",
    text: "Liquidator extension order",
    date: "03 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Sales_officer_order_scan.pdf",
    text: "Under Section 97 of the Multi State Co-operative Societies Act,2002",
    date: "04 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Order-Sale_Officer_dt_28_Mar_2023.pdf",
    text: "Under Section 97 of the Multi State Co-operative Societies Act,2002",
    date: "06 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Order_for_Sale_Officer_dt_28.03.2023.pdf",
    text: "Under Section 97 of the Multi State Co-operative Societies Act,2002",
    date: "07 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Gazette_of_India_21-03-2023.pdf",
    text: "Gazette of India 21-03-2023",
    date: "10 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Liquidation_order_of_Swarn_India_Multi_State_Credit_Cooperative_Society_ltd.pdf",
    text: "Liquidation order of Swarn India Multi State Credit Cooperative Society ltd",
    date: "15 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Notice_for_initiation_of_winding_up_process_of_Real_India_Credit_Cooperative_Society_ltd_Sirohi_Rajasthan_datd_07_march2023.pdf",
    text: "Notice for initiation of winding up process of Real India Credit Cooperative Society ltd Sirohi Rajasthan datd 07 march 2023",
    date: "16 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Provisions_for_liquidation_process.pdf",
    text: "Provisions of Multi-State Cooperative Societies Act,2002 & Rules made there under for Liquidation proceedings of a multi-state cooperative society-reg.",
    date: "21 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Liquidator_extension_order_of_Shree_Swastik_Credit_Cooperative_Society_ltd_(1).pdf",
    text: "Liquidator extension order of Shree Swastik Credit Cooperative Society ltd",
    date: "24 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/under_scetion_86_of_MSCS20230127_15290898.pdf",
    text: "Under section 86 of the multi state Co-operative society Act,2002",
    date: "27 Jun",
  },
  {
    link: "/MSCS/UploadsDocs/Circulars/Liquidation_order_31-01-2023_Rubi_credit_cooperative_society_Ltd_Ajmer_Rajasthan.pdf",
    text: "Liquidation order 31-01-2023 Rub",
    date: "30 Jun",
  },
];

const Activity = (props) => {
  return (
    <React.Fragment>
      <Col xl={5}>
        <Card>
          <CardBody>
            <div className="d-flex">
              <div className="me-2">
                <h2
                  className="card-title mb-4"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  New/Events
                </h2>
              </div>
            </div>
            <SimpleBar style={{ maxHeight: "280px" }}>
              <div className="mt-2">
                <ul className="verti-timeline list-unstyled">
                  {data.map((item, index) => (
                    <li
                      key={index}
                      className={`event-list ${index === 0 && "active"}`}
                    >
                      <div className="event-timeline-dot">
                        <i
                          className={`bx bxs-right-arrow-circle font-size-18 ${
                            index === 0 && "bx-fade-right"
                          }`}
                        ></i>
                      </div>
                      <div className="d-flex">
                        <div className="me-3" style={{ minWidth: "80px" }}>
                          <h5 className="font-size-14">
                            {item.date}{" "}
                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>

                        <div style={{ flex: 1 }}>
                          <div>{item.text}</div>
                        </div>
                      </div>
                    </li>
                  ))}

                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bxs-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3" style={{ minWidth: "80px" }}>
                        <h5 className="font-size-14">
                          10 Nov{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          Posted{" "}
                          <span className="font-weight-semibold">
                            Beautiful Day with Friends
                          </span>{" "}
                          blog... <a href="#">View</a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3" style={{ minWidth: "80px" }}>
                        <h5 className="font-size-14">
                          08 Nov{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          If several languages coalesce, the grammar of the
                          resulting... <a href="#">Read</a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3" style={{ minWidth: "80px" }}>
                        <h5 className="font-size-14">
                          02 Nov{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          Create{" "}
                          <span className="font-weight-semibold">
                            Drawing a sketch blog
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3" style={{ minWidth: "80px" }}>
                        <h5 className="font-size-14">
                          24 Oct{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          In enim justo, rhoncus ut, imperdiet a venenatis vitae
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="d-flex">
                      <div className="me-3" style={{ minWidth: "80px" }}>
                        <h5 className="font-size-14">
                          21 Oct{" "}
                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Activity;
