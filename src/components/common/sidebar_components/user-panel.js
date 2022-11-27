import React from "react";
import logo from "../../../assets/images/dashboard/logo.png";

const UserPanel = () => {
  return (
    <div>
      <div className="sidebar-user text-center">
        <div>
          <img
            className="img-60 rounded-circle lazyloaded blur-up"
            src={logo}
            alt="#"
          />
        </div>
        <h6 className="mt-3 f-14">王大明</h6>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default UserPanel;
