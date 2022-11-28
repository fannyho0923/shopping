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
          Image :
        </Label>
        <Input type="file" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          Product_id :
        </Label>
        <Input type="number" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          Product_name :
        </Label>
        <Input type="text" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          Product_type :
        </Label>
        <select className="form-control digits" id="exampleFormControlSelect1">
          <option>類別一</option>
          <option>類別二</option>
          <option>類別三</option>
        </select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          Price :
        </Label>
        <Input className="form-control" type="number" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          Status :
        </Label>
        <select className="form-control digits" id="exampleFormControlSelect1">
          <option>一</option>
          <option>二</option>
          <option>三</option>
        </select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          Stock :
        </Label>
        <Input className="form-control" type="number" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message-text" className="col-form-label">
          Start_time :
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
          End_time :
        </Label>
        <div className="col-md-7">
          <DateTimePicker onChange={onChangeEndDateTime} value={endDateTime} />
        </div>
      </FormGroup>
    </Form>
  );
};

const Category = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Breadcrumb title="Category" />
      {/* <!-- Container-fluid starts--> */}
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Products Category</h5>
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
                    Add Category
                  </Button>
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
                      <ProductForm />
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
                    <ProductForm />
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
