import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Routers from "./routes";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FormattedMessage, IntlProvider } from "react-intl";
import en from "./i18n/en.js";
import zh from "./i18n/zh.js";

const Root = () => {
  const [locale, setLocale] = useState(navigator.language);

  let messages;

  // 根據使用者選擇的語系 locale 切換使用不同的 messages
  if (locale.includes("zh")) {
    messages = zh;
  } else {
    messages = en;
  }

  return (
    <React.StrictMode>
      <BrowserRouter basename={"/"}>
        <PerfectScrollbar>
          <IntlProvider
            locale={locale}
            key={locale}
            defaultLocale="en"
            messages={messages}
          >
            <FormattedMessage id="app.learn" values={{ name: "React" }} />
            <Routers setLocale={setLocale} />
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
