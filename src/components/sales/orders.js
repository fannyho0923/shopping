import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/orders";
import Datatable from "../common/datatable";
import DateTimePicker from "react-datetime-picker";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Label,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

const Orders = () => {
  const [startDateTime, onChangeStartDateTime] = useState(
    new Date().setMinutes(new Date().getMinutes() + 1)
  );

  return (
    <Fragment>
      <Breadcrumb title="Orders" parent="Sales" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Manage Order</h5>
              </CardHeader>
              <CardBody className="order-datatable">
                <Datatable
                  multiSelectOption={false}
                  myData={data}
                  pageSize={10}
                  pagination={true}
                  class="-striped -highlight"
                >
                  <Form>
                    <FormGroup>
                      <Label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Oder_id :
                      </Label>
                      <Input type="text" className="form-control" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="message-text" className="col-form-label">
                        Status :
                      </Label>
                      <select
                        className="form-control digits"
                        id="exampleFormControlSelect1"
                      >
                        <option>Cash On Delivery</option>
                        <option>Paid</option>
                        <option>Awaiting Authentication</option>
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="message-text" className="col-form-label">
                        Payment_method :
                      </Label>
                      <Input
                        className="form-control"
                        id="validationCustom02"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="message-text" className="col-form-label">
                        Order_status :
                      </Label>
                      <select
                        className="form-control digits"
                        id="exampleFormControlSelect1"
                      >
                        <option>Delivery</option>
                        <option>Processing</option>
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="message-text" className="col-form-label">
                        Date :
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
                        Total :
                      </Label>
                      <Input
                        className="form-control"
                        id="validationCustom02"
                        type="number"
                      />
                    </FormGroup>
                  </Form>
                </Datatable>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Orders;
