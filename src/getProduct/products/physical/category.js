import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import { data } from "../../../assets/data/category";
import Datatable from "../../common/datatable";
import DateTimePicker from 'react-datetime-picker';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [startDateTime, onChangeStartDateTime] = useState(new Date());
  const [endDateTime, onChangeEndDateTime] = useState(new Date());
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const handleStartDate = (date) => {
    setstartDate(date);
  };

  const handleEndDate = (date) => {
    setendDate(date);
  };

  return (
    <Fragment>
      <Breadcrumb title="Category" parent="Physical" />
      {/* <!-- Container-fluid starts--> */}
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>商品清單</h5>
              </CardHeader>
              <CardBody>
                <div className="btn-popup pull-right">
                  <Modal isOpen={open} toggle={onCloseModal}>
                    <ModalHeader toggle={onCloseModal}>
                      <h5
                        className="modal-title f-w-600"
                        id="exampleModalLabel2"
                      >
                        Add Physical Product
                      </h5>
                    </ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup>
                          <Label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Category Name :
                          </Label>
                          <Input type="text" className="form-control" />
                        </FormGroup>
                        <FormGroup>
                          <Label
                            htmlFor="message-text"
                            className="col-form-label"
                          >
                            Category Image :
                          </Label>
                          <Input
                            className="form-control"
                            id="validationCustom02"
                            type="file"
                          />
                        </FormGroup>
                      </Form>
                      <Button> </Button>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => onCloseModal("VaryingMdo")}
                      >
                        Save
                      </Button>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => onCloseModal("VaryingMdo")}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
                <div className="clearfix"></div>
                <div id="basicScenario" className="product-physical">
                  <Datatable
                    myData={data}
                    multiSelectOption={false}
                    pageSize={10}
                    pagination={true}
                    class="-striped -highlight"
                  >
                  <Form>
                  <FormGroup>
                    <Label htmlFor="recipient-name" className="col-form-label">
                    商品名稱 :
                    </Label>
                    <Input type="text" className="form-control" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      Category Image :
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom02"
                      type="file"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      類型 :
                    </Label>
                    <div className="col-xl-8 col-sm-7">
                      <select
                        className="form-control digits"
                        id="exampleFormControlSelect1"
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      主規格 :
                    </Label>
                    <div className="col-xl-8 col-sm-7">
                      <select
                        className="form-control digits"
                        id="exampleFormControlSelect1"
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      副規格 :
                    </Label>
                    <div className="col-xl-8 col-sm-7">
                      <select
                        className="form-control digits"
                        id="exampleFormControlSelect1"
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="recipient-name" className="col-form-label">
                      售價 :
                    </Label>
                    <Input type="number" className="form-control" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      供貨狀態 :
                    </Label>
                    <div className="col-xl-8 col-sm-7">
                      <select
                        className="form-control digits"
                        id="exampleFormControlSelect1"
                      >
                        <option>有現貨</option>
                        <option>已完售</option>
                        <option>關閉</option>
                      </select>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="recipient-name" className="col-form-label">
                      庫存 :
                    </Label>
                    <Input type="number" className="form-control" />
                  </FormGroup>
                  <FormGroup className="form-group mb-3 row">
                    <div className="form-group row">
                      <Label className="col-xl-3 col-md-4">開始時間</Label>
                      <div className="col-md-7">
                      <DateTimePicker onChange={onChangeStartDateTime} value={startDateTime} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label className="col-xl-3 col-md-4">結束時間</Label>
                      <div className="col-md-7">
                      <DateTimePicker onChange={onChangeEndDateTime} value={endDateTime} />
                      </div>
                    </div>
                  </FormGroup>
                </Form>
                  </Datatable>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <!-- Container-fluid Ends--> */}
    </Fragment>
  );
};

export default Category;
