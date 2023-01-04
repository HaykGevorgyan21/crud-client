import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import classes from "./Edit.module.scss";
const PopUp = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  function handleimage(e) {
    setimage(e.target.files[0]);
  }
  function handleName(e) {
    setname(e.target.value);
  }
  function handleAPI() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    axios.patch(`/update/${props.id}`, formData).then((res) => {
      console.log(res.data);
      window.location.reload(true);
    });
  }

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        className={classes["edit-button"]}
        type="primary"
        onClick={showModal}></Button>
      <Modal
        title="Chane Your Photo and Name"
        open={open}
        onOk={handleAPI}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        value="dsadasd">
        <div className={classes["pop-up-background"]}>
          <div className={classes["upload-image-display"]}>
            <label for="inputTag">
              <input
                className={classes["upload_image"]}
                id="inputTag"
                type="file"
                name="file"
                onChange={handleimage}
              />
            </label>
            <input
              placeholder="Product Name..."
              type="text"
              name="name"
              onChange={handleName}
              className={classes["input-name"]}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PopUp;
