import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const TabsetUser = () => {
  return (
    <Fragment>
      <Tabs>
        <TabList className="nav nav-tabs tab-coupon">
          <Tab className="nav-link">新增店家帳號</Tab>
          <Tab className="nav-link">權限</Tab>
        </TabList>
        <TabPanel>
          <Form className="needs-validation user-add" noValidate="">
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> 帳號
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom0"
                  type="text"
                  required=""
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> 密碼
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom3"
                  type="password"
                  required=""
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-xl-3 col-md-4">
                <span>*</span> 確認密碼
              </Label>
              <div className="col-xl-8 col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom4"
                  type="password"
                  required=""
                />
              </div>
            </FormGroup>
          </Form>
        </TabPanel>
        <TabPanel>
          <Form className="needs-validation user-add" noValidate="">
            <div className="permission-block">
              <div className="attribute-blocks">
                {/* <h5 className="f-w-600 mb-3">Product Related Permission </h5> */}
                <Row>
                  <Col xl="3" sm="4">
                    <Label className="form-label">新增商品</Label>
                  </Col>
                  <Col xl="9" sm="8">
                    <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                      <Label className="d-block">
                        <Input
                          className="radio_animated"
                          id="edo-ani1"
                          type="radio"
                          name="rdo-ani"
                        />
                        Allow
                      </Label>
                      <Label className="d-block">
                        <Input
                          className="radio_animated"
                          id="edo-ani2"
                          type="radio"
                          name="rdo-ani"
                          defaultChecked
                        />
                        Deny
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xl="3" sm="4">
                    <Label className="form-label">編輯商品</Label>
                  </Col>
                  <Col xl="9" sm="8">
                    <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                      <Label className="d-block">
                        <Input
                          className="radio_animated"
                          id="edo-ani3"
                          type="radio"
                          name="rdo-ani1"
                          defaultChecked
                        />
                        Allow
                      </Label>
                      <Label className="d-block">
                        <Input
                          className="radio_animated"
                          id="edo-ani4"
                          type="radio"
                          name="rdo-ani1"
                        />
                        Deny
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xl="3" sm="4">
                    <Label className="form-label">刪除商品</Label>
                  </Col>
                  <Col xl="9" sm="8">
                    <FormGroup className=" m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                      <Label className="d-block">
                        <Input
                          className="radio_animated"
                          id="edo-ani5"
                          type="radio"
                          name="rdo-ani2"
                        />
                        Allow
                      </Label>
                      <Label className="d-block">
                        <Input
                          className="radio_animated"
                          id="edo-ani6"
                          type="radio"
                          name="rdo-ani2"
                          defaultChecked
                        />
                        Deny
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xl="3" sm="4">
                    <Label className="mb-0 sm-label-radio">刪除訂單</Label>
                  </Col>
                  <Col xl="9" sm="8">
                    <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated pb-0">
                      <Label className="d-block mb-0">
                        <Input
                          className="radio_animated"
                          id="edo-ani7"
                          type="radio"
                          name="rdo-ani3"
                        />
                        Allow
                      </Label>
                      <Label className="d-block mb-0">
                        <Input
                          className="radio_animated"
                          id="edo-ani8"
                          type="radio"
                          name="rdo-ani3"
                          defaultChecked
                        />
                        Deny
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </div>
          </Form>
        </TabPanel>
      </Tabs>
      <div className="pull-right">
        <Button type="button" color="primary">
          Save
        </Button>
      </div>
    </Fragment>
  );
};

export default TabsetUser;
