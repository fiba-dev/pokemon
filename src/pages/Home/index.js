import "./index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerLista } from "../../api";
import { useDispatch } from "react-redux";
import { addPokemonToList } from "../../actions/pokemonActions";
import { Loading } from "../../components/ui/loading";
export function Home() {
	const navigate = useNavigate();
	let dispatch = useDispatch();
	const [loader, setLoader] = useState(false);

	async function MostrarPokemones() {
		setLoader(true);
		await new Promise((resolve) => setTimeout(resolve, 3000));

		try {
			let pokemones = await obtenerLista();
			dispatch(addPokemonToList(pokemones));
			navigate("/level1");
		} catch (error) {
			// Manejar el error si la llamada falla
		} finally {
			setLoader(false);
		}
	}

	return (
		<div className="homeContainer">
			{loader ? (
				<Loading></Loading>
			) : (
				<>
					<img
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1662638520/pokecards/pokelogo_wbl31g.png"
						className="pokelogo"
						alt="logo"
					/>
					<button onClick={MostrarPokemones} className="buttonStart">
						Comenzar
					</button>
				</>
			)}
		</div>
	);
}
