import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl6 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Loading } from "../../components/ui/loading";
import "./index.css";

function Level5() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	const navigate = useNavigate();
	const [loader, setLoader] = useState(false);
	async function MostrarPokemones() {
		setLoader(true);
		try {
			let pokemones = await obtenerListaLvl6();

			dispatch(addPokemonToList(pokemones));
			navigate("/level6");
		} catch (error) {
			// Manejar el error si la llamada falla
		} finally {
			setLoader(false);
		}
	}
	return (
		<div className="level5Container">
			{loader ? (
				<Loading></Loading>
			) : (
				<div className="lvl5CardsContainer">
					<AllCards></AllCards>{" "}
					<ButtonContinue
						mostrar={winner}
						onClick={MostrarPokemones}
						message="Ganaste!"
						cant={25}
					>
						Mas Pokemones
					</ButtonContinue>
				</div>
			)}
		</div>
	);
}
export { Level5 };
