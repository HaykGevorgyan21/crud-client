import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PopUp from "../EditProduct/EditPopUp";
import classes from "./Getimage.module.scss";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

function Getimage() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get("/product").then((res) => {
      setImage(res.data);
    });
  });

  return (
    <>
      <div className={classes["show"]}>
        <div className={classes["background-images"]}>
          {image.map((el) => {
            return (
              <>
                <div>
                  <img src={el.img_url} />
                  <h1>{el.name}</h1>
                  <PopUp id={el.id} />
                  <DeleteProduct id={el.id} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Getimage;
