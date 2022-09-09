import "./index.css";
import { useNavigate } from "react-router-dom";

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
			<h1 className="winnerText">Ganaste</h1>
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
				Siguiente Nivel
			</button>
		</div>
	);
}
