import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listUser";
import Datatable from "../common/datatable";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const List_user = () => {
  return (
    <Fragment>
      <Breadcrumb title="User List" parent="Users" />
      <Container fluid={true}>
        <Card>
          <CardHeader>
            <h5>User Details</h5>
          </CardHeader>
          <CardBody>
            <div className="btn-popup pull-right">
              <Link to="/users/create-user" className="btn btn-secondary">
                Create User
              </Link>
            </div>
            <div className="clearfix"></div>
            <div
              id="batchDelete"
              className="category-table user-list order-table coupon-list-delete"
            >
              <Datatable
                multiSelectOption={false}
                myData={data}
                pageSize={10}
                pagination={true}
                class="-striped -highlight"
              >
                <Form>
                  <FormGroup>
                    <Label htmlFor="recipient-name" className="col-form-label">
                      avtar :
                    </Label>
                    <Input type="file" className="form-control" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      name :
                    </Label>
                    <Input type="text" className="form-control" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      Email :
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom02"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      Role :
                    </Label>
                    <select
                      className="form-control digits"
                      id="exampleFormControlSelect1"
                    >
                      <option>Admin</option>
                      <option>Customer</option>
                    </select>
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
            </div>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default List_user;
