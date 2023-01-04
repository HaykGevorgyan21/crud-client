import classes from "./Search.module.scss";
import { useEffect, useState } from "react";
import PopUp from "../EditProduct/EditPopUp";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
function Search() {
  const [values, setValue] = useState("");
  const [data, setData] = useState([]);

  async function HadnleSearch() {
    const data = await fetch(`/search/${values}`).then((response) =>
      response.json()
    );

    setData(data);
  }

  useEffect(() => {
    HadnleSearch();
  }, []);

  return (
    <>
      <div className={classes["background-search-bar"]}>
        <form>
          <input
            value={values}
            onChange={(e) => setValue(e.target.value)}
            className={classes["Search-bar"]}
            type="search"
          />
          <button
            onClick={HadnleSearch}
            className={classes["search-add-button"]}></button>
        </form>
      </div>

      <div className={classes["background-image"]}>
        {data.map((el) => {
          console.log(el);
          return (
            <div>
              <img src={el.img_url} />
              <h1>{el.name}</h1>
              <PopUp id={el.id} />
              <DeleteProduct id={el.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
