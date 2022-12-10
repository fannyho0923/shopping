import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Routers from "./routes";
import PerfectScrollbar from "react-perfect-scrollbar";
import { IntlProvider } from "react-intl";
import en from "./i18n/en.js";
import zh from "./i18n/zh.js";

const Root = () => {
  // const [locale, setLocale] = useState(navigator.language);
  // console.log(locale);
  // let messages;

  // // 根據使用者選擇的語系 locale 切換使用不同的 messages
  // if (locale.includes("zh")) {
  //   messages = zh;
  // } else {
  //   messages = en;
  // }
  // 設定語系
  const [locale, setLocale] = useState(navigator.language);
  const lang = ["zh", "en"];
  // console.log(locale)
  // const locale = "zh";
  return (
    <React.StrictMode>
      <BrowserRouter basename={"/"}>
        <PerfectScrollbar>
          {/* <IntlProvider locale={locale} defaultLocale="en" messages={messages}> */}
          <IntlProvider
            {...{ locale }}
            key={locale}
            defaultLocale={"zh"}
            messages={(locale.includes("zh") && zh) || en}
          >
            <Routers {...{ lang, locale, setLocale }} />
            {/* <Routers /> */}
          </IntlProvider>
        </PerfectScrollbar>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
