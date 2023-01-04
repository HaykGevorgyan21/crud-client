import axios from "axios";
import { message } from "antd";
import classes from "./Delete.module.scss";
const DeleteProduct = (props) => {
  function HandleDelete() {
    axios.delete(`/delete/${props.id}`);
  }

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Your Product Hass Benn Deleted",
      className: classes["custom-class"],
    });
  };

  return (
    <>
      {contextHolder}
      <button
        onClick={() => {
          HandleDelete();
          success();
        }}
        className={classes["delete-button"]}></button>
    </>
  );
};

export default DeleteProduct;
