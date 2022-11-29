import React, { useState } from "react";
import Sidebar from "./common/sidebar_components/sidebar";
import RightSidebar from "./common/right-sidebar";
import Footer from "./common/footer";
import Header from "./common/header_components/header";
import { Outlet } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const App = ({setLocale}) => {

	const initialState = {
		ltr: true,
		divName: "RTL",
	};

	const [side, setSide] = useState(initialState);

	const ChangeRtl = (divName) => {
		if (divName === "RTL") {
			document.body.classList.add("rtl");
			setSide({ divName: "LTR" });
		} else {
			document.body.classList.remove("rtl");
			setSide({ divName: "RTL" });
		}
	};
	return (

		<div>
			<div className="page-wrapper">
				<Header setLocale={setLocale} >
				{/* <FormattedMessage id="app.learn" values={{ name: "fanny" }} /> */}
				</Header>
				<div className="page-body-wrapper">
					<Sidebar />
					<RightSidebar />
					<div className="page-body"><Outlet/></div>
					<Footer />
				</div>
			</div>
			<div
				className="btn-light custom-theme"
				onClick={() => ChangeRtl(side.divName)}
			>
				{side.divName}
			</div>
		</div>
	);
};
export default App;
