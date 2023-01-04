import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
export function Navigates() {
  return (
    <div className={classes["Navigation-bar"]}>
      <Link to={"/Product"}>Products</Link>
      <Link to={"/uploade"}>Create Product</Link>
      <Link to={"/Search"}>Search</Link>
    </div>
  );
}

export default Navigates;
