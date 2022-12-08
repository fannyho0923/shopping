import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/login";
import LayoutRoutes from "./LayoutRoutes";

const Routers = (props) => {
  return (
    <Fragment>
      <Routes>
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/auth/login`}
          element={<Login />}
        />
        <Route path={`/*`} element={<LayoutRoutes {...props} />} />
      </Routes>
    </Fragment>
  );
};

export default Routers;
