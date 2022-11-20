import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import getProduct from "../../assets/data/getProduct";
import Datatable from "../common/datatable";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const GetProduct = () => {
  const [list, setList] = useState(getProduct);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    let arr;
    switch (e.target.name) {
      case "phone":
        arr = getProduct?.filter((v) => v.client_phone.includes(lowerCase));
        setList(arr);
        break;
      case "order":
        console.log("aj");
        arr = getProduct?.filter((v) => v.oder_id.includes(lowerCase));
        setList(arr);
        break;
    }
    console.log(list.length);
  };

  return (
    <Fragment>
      <Breadcrumb title="Orders" parent="Sales" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>到店取貨系統</h5>
              </CardHeader>
              <CardBody className="order-datatable">
                <div style={{ width: "100%", display: "flex" }}>
                  <FormGroup
                    className="form-group mb-3 row"
                    style={{ width: "50%" }}
                  >
                    <Label className="col-xl-3 col-sm-4 mb-0">
                      電話號碼查詢 :
                    </Label>
                    <div className="col-xl-8 col-sm-7">
                      <Input
                        className="form-control mb-0"
                        name="phone"
                        id="validationCustom02"
                        type="search"
                        onChange={inputHandler}
                        required
                      />
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </FormGroup>
                  <FormGroup
                    className="form-group mb-3 row"
                    style={{ width: "50%" }}
                  >
                    <Label className="col-xl-3 col-sm-4 mb-0">
                      訂單編號查詢 :
                    </Label>
                    <div className="col-xl-8 col-sm-7">
                      <Input
                        className="form-control mb-0"
                        name="order"
                        id="validationCustom02"
                        type="search"
                        onChange={inputHandler}
                        required
                      />
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </FormGroup>
                </div>
                <Datatable
                  multiSelectOption={false}
                  closeAction={false}
                  deleteAction={false}
                  details={true}
                  myData={list.length ? list : []}
                  pageSize={10}
                  pagination={true}
                  class="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default GetProduct;
