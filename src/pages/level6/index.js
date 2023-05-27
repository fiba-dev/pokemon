import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl7 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Loading } from "../../components/ui/loading";
import "./index.css";

function Level6() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	let navigate = useNavigate();
	const [loader, setLoader] = useState(false);
	async function MostrarPokemones() {
		setLoader(true);
		try {
			let pokemones = await obtenerListaLvl7();

			dispatch(addPokemonToList(pokemones));
			navigate("/level7");
		} catch (error) {
			// Manejar el error si la llamada falla
		} finally {
			setLoader(false);
		}
	}
	return (
		<div className="level6Container">
			{loader ? (
				<Loading></Loading>
			) : (
				<div className="cardsContainer">
					<AllCards></AllCards>{" "}
					<ButtonContinue
						mostrar={winner}
						onClick={MostrarPokemones}
						message="Ganaste!"
						cant={30}
					>
						Mas Pokemones
					</ButtonContinue>
				</div>
			)}
		</div>
	);
}
export { Level6 };
