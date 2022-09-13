import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderMusic } from "./headerMusic";

function Layout(props) {
	return (
		<div>
			<HeaderMusic></HeaderMusic>

			<Outlet></Outlet>
		</div>
	);
}

export { Layout };
