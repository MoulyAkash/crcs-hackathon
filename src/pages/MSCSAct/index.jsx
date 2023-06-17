import React, { useState, useEffect } from "react";
import { Card, CardBody, Container, Row, Col, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// import Component
import Storage from "./Storage";
import { mscsPDF } from "../../data/data";

const MSCS = () => {
  //meta title
  document.title = "MSCS | Central Registrar for Cooperative Societies (CRCS)";

  const { id } = useParams();

  const [formNum, setFormNum] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [canPreviousPage, setCanPreviousPage] = useState(true);
  const [canNextPage, setCanNextPage] = useState(true);

  useEffect(() => {
    setFormNum(Math.min(id, mscsPDF.length));
    setPageNumber(1);
  }, [id]);

  useEffect(() => {
    setPageNumber(1);
  }, [formNum]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (pageNumber === 1) {
      setCanPreviousPage(false);
    } else {
      setCanPreviousPage(true);
    }
  }, [numPages, pageNumber]);

  useEffect(() => {
    if (pageNumber === numPages) {
      setCanNextPage(false);
    } else {
      setCanNextPage(true);
    }
  }, [numPages, pageNumber]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="MSCS Act"
            breadcrumbItem={mscsPDF[formNum - 1].formName}
          />
          <div className="d-xl-flex">
            <div className="w-100">
              <div className="d-md-flex">
                <div className="w-100">
                  <Card>
                    <CardBody>
                      <div className="resume-container">
                        <Document
                          file={mscsPDF[formNum - 1].file}
                          onLoadSuccess={onDocumentLoadSuccess}
                          className={"PDFDocument"}
                        >
                          <Page
                            pageNumber={pageNumber}
                            className={"PDFPage PDFPageOne"}
                          />
                        </Document>
                      </div>
                      <Row className="justify-content-md-end justify-content-center align-items-center">
                        <a
                          href={mscsPDF[formNum - 1].file}
                          className="download-pdf-button-alt"
                        >
                          <Button color="danger" className="btn btn-danger ">
                            <i
                              className="mdi mdi-file-pdf"
                              style={{ paddingRight: 5 }}
                            ></i>
                            Download PDF
                          </Button>
                        </a>
                        <Col className="col-md-auto">
                          <div className="d-flex gap-1">
                            <a
                              href={mscsPDF[formNum - 1].file}
                              className="download-pdf-button"
                            >
                              <Button
                                color="danger"
                                className="btn btn-danger "
                              >
                                <i
                                  className="mdi mdi-file-pdf"
                                  style={{ paddingRight: 5 }}
                                ></i>
                                Download PDF
                              </Button>
                            </a>
                            <Button
                              color="primary"
                              onClick={() => setPageNumber(1)}
                              disabled={!canPreviousPage}
                            >
                              {"<<"}
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => setPageNumber(pageNumber - 1)}
                              disabled={!canPreviousPage}
                            >
                              {"<"}
                            </Button>
                          </div>
                        </Col>
                        <Col className="col-md-auto d-md-block">
                          Page{" "}
                          <strong>
                            {pageNumber} of {numPages}
                          </strong>
                        </Col>
                        <Col className="col-md-auto">
                          <div className="d-flex gap-1">
                            <Button
                              color="primary"
                              onClick={() => setPageNumber(pageNumber + 1)}
                              disabled={!canNextPage}
                            >
                              {">"}
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => setPageNumber(numPages)}
                              disabled={!canNextPage}
                            >
                              {">>"}
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
            <Storage
              data={mscsPDF}
              onClick={(data) => {
                setFormNum(parseInt(data.id));
              }}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default MSCS;
