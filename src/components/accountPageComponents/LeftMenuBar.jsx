import React from "react";
import logo from "../../assets/images/logo.jpg";
import { menuItems } from "../../constant/AppData";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function LeftMenuBar() {
  const location = useLocation();
  const activeItem = location.pathname;
  return (
    <>
      <div className="left_menu_bar">
        <div className="acc_window">
          <div>
            <div className="user_info">
              <div className="img_av">
                <img src={logo} alt="Logo" />
              </div>
              <div>
                <p className="usermail">alim@gmail.com</p>
                <p className="userbal">0,00 Ts</p>
              </div>
            </div>
          </div>
          <div className="account_menu_list">
            {menuItems.map((item, index) => (
              <Link to={item.path} key={index}>
                <div
                  className={`${item.className} ${
                    item.path === activeItem ? "this_menu" : ""
                  }`}
                  key={index}
                >
                  <item.icon fontSize={24} /> <p>{item.label}</p>{" "}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftMenuBar;
