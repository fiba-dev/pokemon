import "./index.css";
import { useNavigate } from "react-router-dom";

import { Particulas } from "../particles/index.tsx";
export function ButtonContinue(props) {
	let navigate = useNavigate();
	let mostrar = props.mostrar;
	let classButton = "";
	if (mostrar === true) {
		classButton = "showWinnerWindows";
	} else {
		classButton = "dontShowWinnerWindows";
	}

	return (
		<div className={classButton}>
			<Particulas play={props.mostrar} cant={props.cant}>
				{" "}
			</Particulas>
			<h1 className="winnerText">{props.message}</h1>{" "}
			<img
				src="https://res.cloudinary.com/fiba06-dev/image/upload/v1662730496/pokecards/ashvictory_quywu2.png"
				alt="ashWinner"
				className="ash"
			></img>
			<button
				onClick={() => {
					props.onClick();
					navigate(props.navigate);
				}}
				className={"buttonWinner"}
			>
				{props.children}
			</button>
		</div>
	);
}
