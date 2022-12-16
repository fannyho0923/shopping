import React, { useEffect, useState, Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Unlock } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../../../src/apis/admin/login";

const LoginTabset = () => {
  const history = useNavigate();
  const [accountId, setAccountId] = useState("");
  const [accountPw, setAccountPw] = useState("");

  const clickActive = (event) => {
    document.querySelector(".nav-link").classList.remove("show");
    event.target.classList.add("show");
  };

  // useEffect(() => {
  //   login({ accountId: "jasonTest", accountPw: "jasonTest" });
  // }, []);

  const handleSubmit = async (e) => {
    // console.log(accountId, accountPw);
    e.preventDefault();
    const res = await login({ accountId: accountId, accountPw: accountPw });
    console.log(res.data.message);
    if (res.data.message === "ok") {
      localStorage.setItem("accessToken", res.data.data.accessToken);
      history(`${process.env.PUBLIC_URL}/products/add-product`);
    }
  };
  const routeChange = () => {
    history(`${process.env.PUBLIC_URL}/products/add-product`);
  };
  return (
    <div>
      <Fragment>
        <Tabs>
          <TabList className="nav nav-tabs tab-coupon">
            <Tab className="nav-link" onClick={(e) => clickActive(e)}>
              <User />
              Login
            </Tab>
            <Tab className="nav-link" onClick={(e) => clickActive(e)}>
              <Unlock />
              Register
            </Tab>
          </TabList>

          <TabPanel>
            <Form className="form-horizontal auth-form" onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  required=""
                  name="login[username]"
                  className="form-control"
                  placeholder="Username"
                  id="exampleInputEmail1"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  required=""
                  name="login[password]"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={accountPw}
                  onChange={(e) => setAccountPw(e.target.value)}
                />
              </FormGroup>
              <div className="form-terms">
                <div className="custom-control custom-checkbox me-sm-2">
                  <Label className="d-block">
                    <Input
                      className="checkbox_animated"
                      id="chk-ani2"
                      type="checkbox"
                    />
                    Reminder Me{" "}
                    <span className="pull-right">
                      <a href="/#" className="btn btn-default forgot-pass p-0">
                        lost your password
                      </a>
                    </span>
                  </Label>
                </div>
              </div>
              <div className="form-button">
                <Button color="primary" type="submit">
                  Login
                </Button>
              </div>
              <div className="form-footer">
                <span>Or Login up with social platforms</span>
                <ul className="social">
                  <li>
                    <a href="/#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="icon-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="icon-pinterest-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Form>
          </TabPanel>
          <TabPanel>
            <Form className="form-horizontal auth-form">
              <FormGroup>
                <Input
                  required=""
                  name="login[username]"
                  type="email"
                  className="form-control"
                  placeholder="Username"
                  id="exampleInputEmail12"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  required=""
                  name="login[password]"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  required=""
                  name="login[password]"
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </FormGroup>
              <div className="form-terms">
                <div className="custom-control custom-checkbox me-sm-2">
                  <Label className="d-block">
                    <Input
                      className="checkbox_animated"
                      id="chk-ani2"
                      type="checkbox"
                    />
                    I agree all statements in{" "}
                    <span>
                      <a href="/#">Terms &amp; Conditions</a>
                    </span>
                  </Label>
                </div>
              </div>
              <div className="form-button">
                <Button
                  color="primary"
                  type="submit"
                  onClick={() => routeChange()}
                >
                  Register
                </Button>
              </div>
              <div className="form-footer">
                <span>Or Sign up with social platforms</span>
                <ul className="social">
                  <li>
                    <a href="/#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="icon-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="icon-pinterest-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Form>
          </TabPanel>
        </Tabs>
      </Fragment>
    </div>
  );
};

export default LoginTabset;
