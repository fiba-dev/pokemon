import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl10 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import "./index.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Loading } from "../../components/ui/loading";

function Level9() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	let navigate = useNavigate();
	const [loader, setLoader] = useState(false);
	async function MostrarPokemones() {
		setLoader(true);
		try {
			let pokemones = await obtenerListaLvl10();

			dispatch(addPokemonToList(pokemones));
			navigate("/level10");
		} catch (error) {
			// Manejar el error si la llamada falla
		} finally {
			setLoader(false);
		}
	}
	return (
		<div className="level9Container">
			{loader ? (
				<Loading></Loading>
			) : (
				<div className="level9CardsContainer">
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
export { Level9 };
