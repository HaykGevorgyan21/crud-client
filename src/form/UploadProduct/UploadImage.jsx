import { useState } from "react";
import axios from "axios";
import classes from "./UploadImage.module.scss";
import { useNavigate } from "react-router-dom";
const UploadAndDisplayImage = () => {
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate()
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
    axios.post("/product", formData).then((res) => {
      console.log(res.data);
       navigate('/product')
    });
  }
  return (
    <div className={classes["upload-image-display"]}>
      <h3>Upload And Attch Files</h3>
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
      <button className={classes["submit"]} onClick={handleAPI}>
        submit
      </button>
    </div>
  );
};

export default UploadAndDisplayImage;
