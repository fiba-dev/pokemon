import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector } from "react-redux";

import "./index.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Loading } from "../../components/ui/loading";

function Level10() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	const [loader, setLoader] = useState(false);
	let navigate = useNavigate();
	async function MostrarPokemones() {
		setLoader(true);
		try {
			navigate("/");
		} catch (error) {
			// Manejar el error si la llamada falla
		} finally {
			setLoader(false);
		}
	}
	return (
		<div className="level10Container">
			{loader ? (
				<Loading></Loading>
			) : (
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
			)}
		</div>
	);
}
export { Level10 };
