import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import DateTimePicker from "react-datetime-picker";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import one from "../../assets/images/pro3/1.jpg";
import user from "../../assets/images/user.png";
import productTypes from "../../assets/data/productTypes";

const Add_product = () => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [file, setFile] = useState();
  const [previewImg, setPreviewImg] = useState(one);
  const [typeMajor, setTypeMajor] = useState(true);
  const [typeCondition, setTypeCondition] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [dummyimgs, setDummyimgs] = useState([
    { img: user },
    { img: user },
    { img: user },
  ]);

  const [open, setOpen] = useState(false);
  const [startDateTime, onChangeStartDateTime] = useState(
    new Date().setMinutes(new Date().getMinutes() + 1)
  );
  const [endDateTime, onChangeEndDateTime] = useState(
    new Date().setMinutes(new Date().getMinutes() + 1)
  );

  const onChange = (e) => {
    setValue(e);
  };

  const IncrementItem = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    } else {
      return null;
    }
  };
  const DecreaseItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      return null;
    }
  };
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  //	image upload

  const _handleImgChange = (e, i) => {
    e.preventDefault();
    let reader = new FileReader();
    const image = e.target.files[0];
    reader.onload = () => {
      dummyimgs[i].img = reader.result;
      setFile({ file: file });
      setDummyimgs(dummyimgs);
      for (let index = dummyimgs.length - 1; index >= 0; index--) {
        if (dummyimgs[index].img !== user) {
          setPreviewImg(dummyimgs[index].img);
        }
      }
    };

    reader.readAsDataURL(image);
  };

  const handleRemoveRow = () => {
    // const updatedData = data.filter(function (el) {
    //   return checkedValues.indexOf(el.id) < 0;
    // });
    // setData([...updatedData]);
    // toast.success("Successfully Deleted !");
  };

  const handleValidSubmit = () => {};
  return (
    <Fragment>
      <Breadcrumb title="Add Product" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Add Product</h5>
              </CardHeader>
              <CardBody>
                <Row className="product-adding">
                  <Col xl="5">
                    <div className="add-product">
                      <Row>
                        <Col xl="9 xl-50" sm="6 col-9">
                          <img
                            src={previewImg}
                            alt=""
                            className="img-fluid image_zoom_1 blur-up lazyloaded"
                          />
                        </Col>
                        <Col xl="3 xl-50" sm="6 col-3">
                          <ul className="file-upload-product">
                            {dummyimgs.map((res, i) => {
                              return (
                                <li key={i}>
                                  <div className="box-input-file">
                                    <Input
                                      className="upload"
                                      type="file"
                                      onChange={(e) => _handleImgChange(e, i)}
                                    />
                                    <img
                                      alt=""
                                      src={res.img}
                                      style={{ width: 50, height: 50 }}
                                    />
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xl="7">
                    <Form
                      className="needs-validation add-product-form"
                      onSubmit={handleValidSubmit}
                    >
                      <div className="form form-label-center">
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            類型:
                          </Label>
                          <div
                            style={{
                              width: "auto",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <Label>
                                <Input
                                  className="radio_animated"
                                  id="edo-ani3"
                                  type="radio"
                                  name="rdo-ani1"
                                  defaultChecked
                                  onClick={() => {
                                    setTypeMajor(true);
                                    setTypeCondition(false);
                                  }}
                                />
                                主要
                              </Label>
                              <Label
                                style={{ marginLeft: "1rem" }}
                                className="d-block form-label"
                              >
                                <Input
                                  className="radio_animated"
                                  id="edo-ani4"
                                  type="radio"
                                  name="rdo-ani1"
                                  onClick={() => setTypeMajor(false)}
                                />
                                加價購
                              </Label>
                            </div>
                            {!typeMajor && (
                              <div
                                style={{ display: "flex", margin: "0 1rem" }}
                              >
                                <div>
                                  <Label className="d-block form-label">
                                    <Input
                                      className="radio_animated"
                                      type="radio"
                                      name="condition"
                                      defaultChecked
                                      onClick={() => setTypeCondition(false)}
                                    />
                                    無條件
                                  </Label>
                                  <Label className="d-block form-label">
                                    <Input
                                      className="radio_animated"
                                      type="radio"
                                      name="condition"
                                      onClick={() => setTypeCondition(true)}
                                    />
                                    滿額
                                  </Label>
                                  <Label className="d-block form-label">
                                    <Input
                                      className="radio_animated"
                                      type="radio"
                                      name="condition"
                                      onClick={() => setTypeCondition(true)}
                                    />
                                    滿件
                                  </Label>
                                </div>
                                {typeCondition && (
                                  <div
                                    style={{
                                      marginLeft: "1rem",
                                    }}
                                  >
                                    <Label id="trtr" className="form-label">
                                      條件
                                    </Label>
                                    <Input name="條件" type="text" required />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            商品名稱 :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control"
                              name="product_name"
                              id="validationCustom01"
                              type="text"
                              required
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <div style={{ display: "flex" }}>
                          <FormGroup className="form-group mb-3 row">
                            <Label className="col-xl-3 col-sm-4 mb-0">
                              售價 :
                            </Label>
                            <div className="col-xl-8 col-sm-7">
                              <Input
                                className="form-control mb-0"
                                name="price"
                                id="validationCustom02"
                                type="text"
                                required
                              />
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                          </FormGroup>
                          <FormGroup className="form-group mb-3 row">
                            <Label className="col-xl-3 col-sm-4 mb-0">
                              原價 :
                            </Label>
                            <div className="col-xl-8 col-sm-7">
                              <Input
                                className="form-control mb-0"
                                name="price"
                                id="validationCustom02"
                                type="text"
                                required
                              />
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                          </FormGroup>
                        </div>
                      </div>
                      <div className="form">
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            商品類別 :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              className="form-control digits"
                              id="exampleFormControlSelect1"
                            >
                              {productTypes.map((v) => (
                                <option key={v.name}>{v.name}</option>
                              ))}
                            </select>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            商品庫存 :
                          </Label>
                          <fieldset className="qty-box ms-0">
                            <div className="input-group bootstrap-touchspin">
                              <div className="input-group-prepend">
                                <Button
                                  style={{ zIndex: 1 }}
                                  className="btn btn-primary btn-square bootstrap-touchspin-down"
                                  type="button"
                                  onClick={DecreaseItem}
                                >
                                  <i className="fa fa-minus"></i>
                                </Button>
                              </div>
                              <div className="input-group-prepend">
                                <span className="input-group-text bootstrap-touchspin-prefix"></span>
                              </div>
                              <Input
                                className="touchspin form-control"
                                type="text"
                                value={quantity}
                                onChange={handleChange}
                              />
                              <div className="input-group-append">
                                <span className="input-group-text bootstrap-touchspin-postfix"></span>
                              </div>
                              <div className="input-group-append ms-0">
                                <Button
                                  style={{ zIndex: 1 }}
                                  className="btn btn-primary btn-square bootstrap-touchspin-up"
                                  type="button"
                                  onClick={IncrementItem}
                                >
                                  <i className="fa fa-plus"></i>
                                </Button>
                              </div>
                            </div>
                          </fieldset>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            供貨狀態 :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              className="form-control digits"
                              id="exampleFormControlSelect1"
                            >
                              <option value="">有現貨</option>
                              <option value="">已完售</option>
                              <option value="">關閉</option>
                            </select>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <div
                            style={{ display: "flex", marginBottom: "1rem" }}
                          >
                            <Label className="col-xl-3 col-sm-4 mb-0">
                              販售時間 :
                            </Label>
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <Label>
                                <Input
                                  className="radio_animated"
                                  id="edo-ani5"
                                  type="radio"
                                  name="rdo-ani2"
                                  defaultChecked
                                  onClick={() => {
                                    setEndTime(false);
                                  }}
                                />
                                立即上架
                              </Label>
                              <Label
                                style={{ marginLeft: "1rem" }}
                                className="d-block form-label"
                              >
                                <Input
                                  className="radio_animated"
                                  id="edo-ani6"
                                  type="radio"
                                  name="rdo-ani2"
                                  onClick={() => setEndTime(true)}
                                />
                                限時上架
                              </Label>
                            </div>
                          </div>
                          <div className="form-group row">
                            <Label className="col-xl-3 col-md-4">開始</Label>
                            <div className="col-md-7">
                              <DateTimePicker
                                onChange={onChangeStartDateTime}
                                value={startDateTime}
                              />
                            </div>
                          </div>
                          {endTime && (
                            <div className="form-group row">
                              <Label className="col-xl-3 col-md-4">結束</Label>
                              <div className="col-md-7">
                                <DateTimePicker
                                  onChange={onChangeEndDateTime}
                                  value={endDateTime}
                                />
                              </div>
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4">
                            商品簡介 :
                          </Label>
                          <div className="col-xl-8 col-sm-7 description-sm">
                            <textarea
                              className="form-control rounded"
                              id="exampleFormControlTextarea1"
                              rows="6"
                            ></textarea>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4">
                            商品資訊 :
                          </Label>
                          <div className="col-xl-8 col-sm-7 description-sm">
                            <textarea
                              className="form-control rounded"
                              id="exampleFormControlTextarea1"
                              rows="6"
                            ></textarea>
                          </div>
                        </FormGroup>
                      </div>
                      <div className="offset-xl-3 offset-sm-4">
                        <Button type="submit" color="primary">
                          Add
                        </Button>
                        <Button type="button" color="light">
                          Discard
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={open}
          toggle={onCloseModal}
          style={{ overlay: { opacity: 0.1 } }}
        >
          <ModalHeader toggle={onCloseModal}>
            <h5 className="modal-title f-w-600" id="exampleModalLabel2">
              商品庫存進階設定
            </h5>
          </ModalHeader>
          <ModalBody>
            <Form>
              <Label htmlFor="recipient-name" className="col-form-label">
                商品名稱 :
              </Label>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>供貨狀態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        className="form-control digits"
                        id="exampleFormControlSelect1"
                      >
                        <option>有現貨</option>
                        <option>已完售</option>
                        <option>關閉</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="primary"
              onClick={() => onCloseModal("VaryingMdo")}
            >
              Update
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
      </Container>
    </Fragment>
  );
};

export default Add_product;
