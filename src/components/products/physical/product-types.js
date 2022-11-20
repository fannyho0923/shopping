import React, { Fragment, useState } from "react";
import Breadcrumb from "../../../components/common/breadcrumb.js";
import data from "../../../assets/data/productTypes";
import Datatable from "../../common/datatable";
import { ToastContainer, toast } from "react-toastify";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

const ProductType = () => {
  const [open, setOpen] = useState(false);
  const [productTypes, setProductTypes] = useState(data);
  const [product, setProduct] = useState(null);
  const [startDateTime, onChangeStartDateTime] = useState(new Date());
  const [endDateTime, onChangeEndDateTime] = useState(new Date());

  // useEffect(() => {
  //   if (!submittingStatus.current) {
  //     return;
  //   }
  //   // fetch data
  //   submittingStatus.current = false;
  // }, [productTypes]);

  // useEffect(() => {
  // }, [productTypes]);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onChange = (v) => {
    setProduct(v.target.value);
  };

  // const handleRemoveRow = () => {
  //   const updatedData = myData.filter(function (el) {
  //     return checkedValues.indexOf(el.number) < 0;
  //   });
  //   setData([...updatedData]);
  //   toast.success("Successfully Deleted !");
  // };

  const handleAdd = () => {
    const del = data;
    del.push({
      number: "#",
      name: product,
    });
    setProductTypes([...del]);
    console.log(product);
    toast.success("Successfully Added !");
  };

  const onCloseModal = (data) => {
    if (data === "add") {
      handleAdd();
      // setProductTypes(
      //   productTypes.push({
      //     number: "test",
      //     name: data,
      //   })
      // );
    }
    setOpen(false);
  };

  return (
    <Fragment>
      <Breadcrumb title="Orders" parent="Sales" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>商品類別管理頁</h5>
              </CardHeader>
              <CardBody className="order-datatable">
                <Datatable
                  multiSelectOption={false}
                  closeAction={false}
                  myData={productTypes}
                  pageSize={10}
                  pagination={false}
                  class="-striped -highlight"
                  ProductType={ProductType}
                >
                  <Form>
                    <FormGroup>
                      <Label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        商品名稱 :
                      </Label>
                      <Input type="text" className="form-control" />
                    </FormGroup>
                  </Form>
                </Datatable>
                <Button
                  className="mt-4 btn btn-primary btn-square bootstrap-touchspin-down"
                  type="button"
                  onClick={onOpenModal}
                >
                  ＋ 新增類別
                </Button>
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
              新增贈品
            </h5>
          </ModalHeader>
          <ModalBody>
            <Form>
              <Label htmlFor="recipient-name" className="col-form-label">
                贈品名稱 :
              </Label>
              <Input type="text" className="form-control" onChange={onChange} />
              <Label htmlFor="message-text" className="col-form-label">
                範例:強效美白面膜
              </Label>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="primary"
              onClick={() => onCloseModal("add")}
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
      <ToastContainer />
    </Fragment>
  );
};

export default ProductType;
