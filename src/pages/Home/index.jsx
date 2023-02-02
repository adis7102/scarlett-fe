import React, { Fragment, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import CardItem from "../../components/CardItem";
import Input from "../../components/Input";
import DatePicker from "../../components/DatePicker";

import {
  getListData,
  deleteData,
  addData,
  editData,
  removeDate,
} from "../../store/actions";
import { type_form, URL } from "../../constants";

import "./styles.scss";

const Home = (props) => {
  const dispatch = useDispatch();

  const { loading, listData } = useSelector((state) => state);

  const [openModal, setOpenModal] = useState(null);
  const [formData, setFormData] = useState(type_form);

  useEffect(() => {
    dispatch(getListData(URL));
  }, []);

  const handleCheck = (id) => {
    dispatch(deleteData(URL, id));
  };

  const handleInput = (e) => {
    const { name, value } = e?.target;

    const cloneForm = JSON.parse(JSON.stringify(formData));

    cloneForm[name] = value;

    setFormData(cloneForm);
  };

  const handleAdd = () => {
    dispatch(addData(URL, formData));

    setOpenModal(null);
    setFormData(type_form);
  };

  const handleOpenModalUpdate = (index) => {
    setOpenModal("edit");
    setFormData(listData[index]);
  };

  const handleEdit = (id) => {
    dispatch(editData(URL, id, formData));

    setOpenModal(null);
    setFormData(type_form);
  };

  const handleRemoveDate = (index) => {
    const { id, title, type } = listData[index];

    dispatch(
      removeDate(URL, id, {
        id,
        title,
        type,
      })
    );
  };

  return (
    <div className="home">
      <div className="home-container">
        <p className="home-title">My Todo List</p>
        <Button
          className="add-button"
          variant="primary"
          onClick={() => setOpenModal("add")}
        >
          Add Todo
        </Button>
        {!loading ? (
          (listData || []).map((item, index) => {
            return (
              <Fragment key={index}>
                <CardItem
                  index={index}
                  data={item}
                  onCheck={handleCheck}
                  onClick={handleOpenModalUpdate}
                  handleRemoveDate={handleRemoveDate}
                />
              </Fragment>
            );
          })
        ) : (
          <h3>Loading ...</h3>
        )}
        <Modal show={openModal} onHide={() => setOpenModal(null)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {openModal === "add" ? "Add Modal" : "Edit Modal"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-column">
              <div className="input-item">
                <Input
                  title="Title"
                  name="title"
                  value={formData?.title || ""}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="input-item">
                <Input
                  title="Type"
                  name="type"
                  value={formData?.type || ""}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="input-item">
                <DatePicker
                  title="Date"
                  name="date"
                  value={formData?.date || ""}
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              width={100}
              height={40}
              variant="secondary"
              onClick={() => setOpenModal(null)}
            >
              Close
            </Button>
            <Button
              width={100}
              height={40}
              type="submit"
              variant="primary"
              onClick={() =>
                openModal === "add" ? handleAdd() : handleEdit(formData?.id)
              }
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
