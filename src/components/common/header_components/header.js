import React, { Fragment, useState } from "react";
import {
  AlignLeft,
  Maximize2,
  MessageSquare,
  MoreHorizontal,
} from "react-feather";
import { FormattedMessage } from "react-intl";

//images
import logo from "../../../assets/images/dashboard/logo.png";

const Header = ({ lang, locale, setLocale }) => {
  const [sidebar, setSidebar] = useState(true);
  const [rightSidebar, setRightSidebar] = useState(true);
  const [navMenus, setNavMenus] = useState(false);

  const toggle = () => {
    // setNavMenus((prevState) => ({
    // 	navMenus: !prevState.navMenus,
    // }));
    setNavMenus(!navMenus);
  };

  const showRightSidebar = () => {
    if (rightSidebar) {
      setRightSidebar(false);
      document.querySelector(".right-sidebar").classList.add("show");
    } else {
      setRightSidebar(true);
      document.querySelector(".right-sidebar").classList.remove("show");
    }
  };
  const goFull = () => {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };
  const openCloseSidebar = () => {
    if (sidebar) {
      setSidebar(false);
      document.querySelector(".page-main-header").classList.add("open");
      document.querySelector(".page-sidebar").classList.add("open");
      document.querySelector(".footer").classList.add("open");
    } else {
      setSidebar(true);
      document.querySelector(".page-main-header").classList.remove("open");
      document.querySelector(".page-sidebar").classList.remove("open");
      document.querySelector(".footer").classList.remove("open");
    }
  };

  return (
    <Fragment>
      {/* open */}
      <div className="page-main-header ">
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none col-auto">
            <div className="logo-wrapper">
              <a href="index.html">
                <img className="blur-up lazyloaded" src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="mobile-sidebar col-auto p-0">
            <div className="media-body text-end switch-sm">
              <label className="switch">
                <a href="#javaScript" onClick={openCloseSidebar}>
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
          <div className="nav-right col">
            <ul className={"nav-menus " + (navMenus ? "open" : "")}>
              <li>
                <a onClick={goFull} className="text-dark" href="#javaScript">
                  <Maximize2 />
                </a>
              </li>
              <li className="onhover-dropdown">
                <a
                  className="txt-dark"
                  href="#javaScript"
                  onClick={() =>
                    setLocale(lang.find((lang) => lang !== locale))
                  }
                >
                  <h6>
                    <FormattedMessage id="locales.lang.text" />
                  </h6>
                </a>
                {/* <Language /> */}
              </li>
            </ul>
            <div
              className="d-lg-none mobile-toggle pull-right"
              onClick={() => toggle()}
            >
              <MoreHorizontal />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
