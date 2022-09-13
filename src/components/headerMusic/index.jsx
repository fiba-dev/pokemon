import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { setVolumenGeneral } from "../../actions/pokemonActions";
let winnerAudio = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1662941259/pokecards/pokemon-caught-rse_meloboom_wzwr3y.mp3"
);
let compareVolumen = 0.3;
let winnerAudioSetting = 0.3;
let compareTrue = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1663019304/pokecards/pokemon-level-up_meloboom_tayakx.mp3"
);

let music = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1662939710/pokecards/Pok%C3%A9mon_-_Atr%C3%A1palos_Ya_Latino_Oscar_Roa_Full_192_kbps_piyze3.mp3"
);
export function HeaderMusic(props) {
	let { volumen } = useSelector((state) => state.showVolumen);
	let { pokemons, resultsGame, winner, comparations } = useSelector(
		(state) => state.showCardsPokemons
	);
	let dispatch = useDispatch();
	music.volume = volumen;
	compareVolumen = volumen;
	winnerAudioSetting = volumen;

	if (winner === true) {
		winnerAudio.volume = winnerAudioSetting;
		winnerAudio.play();
	}
	if (comparations === true && pokemons.length / 2 !== resultsGame.length) {
		compareTrue.volume = compareVolumen;
		compareTrue.play();
	}
	function ControllerAudio(e) {
		dispatch(setVolumenGeneral(e.target.value));
	}

	return (
		<div className="reproductorMusica">
			<div>
				<button
					className="botonesMusica"
					onClick={() => {
						music.play();
					}}
				>
					<img
						className="iconos"
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1663069458/pokecards/jugar_ztlz9i.png"
						alt="señal de play"
					/>
				</button>
				<button
					className="botonesMusica"
					onClick={() => {
						music.pause();
					}}
				>
					<img
						className="iconos"
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1663069491/pokecards/pausa_1_famy9m.png"
						alt="señal de pausa"
					/>
				</button>
				<button
					className="botonesMusica"
					onClick={() => {
						music.pause();
						music.src =
							"https://res.cloudinary.com/fiba06-dev/video/upload/v1662939710/pokecards/Pok%C3%A9mon_-_Atr%C3%A1palos_Ya_Latino_Oscar_Roa_Full_192_kbps_piyze3.mp3";
					}}
				>
					<img
						className="iconos"
						src="https://res.cloudinary.com/fiba06-dev/image/upload/v1663069386/pokecards/parada_unj9fj.png"
						alt="señal de stop iconos"
					/>
				</button>
			</div>
			<input
				className="volume"
				type={"range"}
				defaultValue={20}
				onChange={ControllerAudio}
			></input>
		</div>
	);
}
