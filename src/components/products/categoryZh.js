import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import { data } from "../../assets/data/category";
import Datatable from "../common/datatable";
import DateTimePicker from "react-datetime-picker";

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

const ProductForm = () => {
  const [startDateTime, onChangeStartDateTime] = useState(
    new Date().setMinutes(new Date().getMinutes() + 1)
  );

  const [endDateTime, onChangeEndDateTime] = useState(
    new Date().setMinutes(new Date().getMinutes() + 1)
  );
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="recipient-name" className="col-form-label">
          圖片 :
        </Label>
        <Input type="file" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          產品 id :
        </Label>
        <Input type="number" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          產品名稱 :
        </Label>
        <Input type="text" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          產品種類 :
        </Label>
        <select className="form-control digits" id="exampleFormControlSelect1">
          <option>類別一</option>
          <option>類別二</option>
          <option>類別三</option>
        </select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          價錢 :
        </Label>
        <Input className="form-control" type="number" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          狀態 :
        </Label>
        <select className="form-control digits" id="exampleFormControlSelect1">
          <option>一</option>
          <option>二</option>
          <option>三</option>
        </select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          庫存 :
        </Label>
        <Input className="form-control" type="number" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          開始時間 :
        </Label>
        <div className="col-md-7">
          <DateTimePicker
            onChange={onChangeStartDateTime}
            value={startDateTime}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          結束時間 :
        </Label>
        <div className="col-md-7">
          <DateTimePicker onChange={onChangeEndDateTime} value={endDateTime} />
        </div>
      </FormGroup>
    </Form>
  );
};

const CategoryZh = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Breadcrumb title="商品清單" />
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
                  <Button
                    type="button"
                    color="primary"
                    onClick={onOpenModal}
                    data-toggle="modal"
                    data-original-title="test"
                    data-target="#exampleModal"
                  >
                    新增清單
                  </Button>
                  <Modal isOpen={open} toggle={onCloseModal}>
                    <ModalHeader toggle={onCloseModal}>
                      <h5
                        className="modal-title f-w-600"
                        id="exampleModalLabel2"
                      >
                        添加實體產品
                      </h5>
                    </ModalHeader>
                    <ModalBody>
                      <ProductForm />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => onCloseModal("VaryingMdo")}
                      >
                        儲存
                      </Button>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => onCloseModal("VaryingMdo")}
                      >
                        關閉
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
                    <ProductForm />
                  </Datatable>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CategoryZh;
