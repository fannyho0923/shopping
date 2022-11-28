import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import CheckoutDetails from "../common/checkout-details";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
} from "reactstrap";
import DatePicker from "react-datepicker";

const Datatable = ({
  myData,
  myClass,
  multiSelectOption,
  closeAction = false,
  details = false,
  pagination,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const [data, setData] = useState(myData);
  const [getProductDate, setGetProductDate] = useState(new Date());

  const selectRow = (e, i) => {
    if (!e.target.checked) {
      setCheckedValues(checkedValues.filter((item, j) => i !== item));
    } else {
      checkedValues.push(i);
      setCheckedValues(checkedValues);
    }
  };

  const handleGetProductDate = (date) => {
    setGetProductDate(date);
  };

  const handleRemoveRow = () => {
    const updatedData = myData.filter(function (el) {
      return checkedValues.indexOf(el.id) < 0;
    });
    setData([...updatedData]);
    toast.success("Successfully Deleted !");
  };

  const renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          data[cellInfo.index][cellInfo.index.id] = e.target.innerHTML;
          setData({ myData: data });
        }}
        dangerouslySetInnerHTML={{
          __html: myData[cellInfo.index][cellInfo.index.id],
        }}
      />
    );
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      const del = data;
      del.splice(index, 1);
      setData([...del]);
    }
    toast.success("Successfully Deleted !");
  };
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = (data) => {
    console.log(data);
    setOpen(false);
  };

  const onOpenDateModal = () => {
    setOpenDate(true);
  };

  const onCloseDateModal = (data) => {
    setOpenDate(false);
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const columns = [];
  for (const key in myData[0]) {
    let editable = renderEditable;
    if (key === "image") {
      editable = null;
    }
    if (key === "status") {
      editable = null;
    }
    if (key === "avtar") {
      editable = null;
    }
    if (key === "vendor") {
      editable = null;
    }
    if (key === "order_status") {
      editable = null;
    }

    columns.push({
      name: <b>{Capitalize(key.toString())}</b>,
      header: <b>{Capitalize(key.toString())}</b>,
      selector: (row) => row[key],
      Cell: editable,
      style: {
        textAlign: "center",
      },
    });
  }

  if (details) {
    columns.push({
      id: "details",
      accessor: (str) => "details",
      cell: (row, index) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <span>
            <Button className="badge badge-success" onClick={onOpenModal}>
              明細
            </Button>
            <Modal
              isOpen={open}
              toggle={onCloseModal}
              style={{ overlay: { opacity: 0.1 }, height: "200px" }}
            >
              <ModalHeader toggle={onCloseModal} />
              <CheckoutDetails style={{ height: "auto" }} />
            </Modal>
          </span>
          <span>
            <Button className="badge badge-success" onClick={onOpenDateModal}>
              領取
            </Button>
            <Modal
              isOpen={openDate}
              toggle={onCloseDateModal}
              style={{ overlay: { opacity: 0.1 }, height: "200px" }}
            >
              <ModalHeader toggle={onCloseDateModal}>
                <h5 className="modal-title f-w-600" id="exampleModalLabel2">
                  取貨時間
                </h5>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <Label htmlFor="recipient-name" className="col-form-label">
                    取貨時間 :
                  </Label>
                  <DatePicker
                    selected={getProductDate}
                    onChange={handleGetProductDate}
                  />
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  color="primary"
                  onClick={onCloseDateModal}
                >
                  Save
                </Button>
                <Button
                  type="button"
                  color="secondary"
                  onClick={onCloseDateModal}
                >
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </span>
        </div>
      ),
      style: {
        textAlign: "center",
      },
      sortable: false,
    });
  } else if (closeAction === true) {
  } else if (multiSelectOption === true) {
    columns.push({
      name: (
        <button
          className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
          onClick={(e) => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              handleRemoveRow();
          }}
        >
          Delete
        </button>
      ),
      id: "delete",
      accessor: (str) => "delete",
      cell: (row) => (
        <div>
          <span>
            <input
              type="checkbox"
              name={row.id}
              defaultChecked={checkedValues.includes(row.id)}
              onChange={(e) => selectRow(e, row.id)}
            />
          </span>
        </div>
      ),
      style: {
        textAlign: "center",
      },
      sortable: false,
    });
  } else {
    columns.push({
      name: <b>Action</b>,
      id: "delete",
      accessor: (str) => "delete",
      cell: (row, index) => (
        <div>
          <span onClick={() => handleDelete(index)}>
            <i
              className="fa fa-trash"
              style={{
                width: 35,
                fontSize: 20,
                padding: 11,
                color: "#e4566e",
              }}
            ></i>
          </span>

          <span>
            <i
              onClick={onOpenModal}
              className="fa fa-pencil"
              style={{
                width: 35,
                fontSize: 20,
                padding: 11,
                color: "rgb(40, 167, 69)",
              }}
            ></i>
            <Modal
              isOpen={open}
              toggle={onCloseModal}
              style={{ overlay: { opacity: 0.1 } }}
            >
              <ModalHeader toggle={onCloseModal}>
                <h5 className="modal-title f-w-600" id="exampleModalLabel2">
                  編輯
                </h5>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
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
          </span>
        </div>
      ),
      style: {
        textAlign: "center",
      },
      sortable: false,
    });
  }
  return (
    <div>
      <Fragment>
        <DataTable
          style={{ backgroundColor: "pink" }}
          data={data}
          columns={columns}
          className={myClass}
          pagination={pagination}
          striped={true}
          center={true}
        />
        <ToastContainer />
      </Fragment>
    </div>
  );
};

export default Datatable;
