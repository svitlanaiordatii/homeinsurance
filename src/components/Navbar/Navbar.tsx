import logo from "@/assets/img/logo.svg";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="top-el-wrap">
      <Link to="/">
        <img className="top-logo" src={logo} alt="Logo" />
      </Link>

      <div className="phone-wrap">
        <span className="red-dot"></span>
        <a className="phone-num" href="tel:8661112233">
          Call <span className="text-bold">(866) 111-2233</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
