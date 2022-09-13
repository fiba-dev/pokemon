import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector } from "react-redux";

import "./index.css";
import { useNavigate } from "react-router-dom";

function Level10() {
	let { winner } = useSelector((state) => state.showCardsPokemons);

	let navigate = useNavigate();
	async function MostrarPokemones() {
		navigate("/");
	}
	return (
		<div className="level10Container">
			{" "}
			<div className="level10CardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					message="Ganaste el Juego!"
					cant={150}
				>
					Volver Al inicio
				</ButtonContinue>
			</div>
		</div>
	);
}
export { Level10 };
