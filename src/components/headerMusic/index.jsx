import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { setVolumenGeneral } from "../../actions/pokemonActions";
import { useState } from "react";
import { FaBackward, FaForward, FaPlay, FaPause, FaStop } from "react-icons/fa";
let winnerAudio = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1662941259/pokecards/pokemon-caught-rse_meloboom_wzwr3y.mp3"
);
let compareVolumen = 0.3;
let winnerAudioSetting = 0.3;
let compareTrue = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1663019304/pokecards/pokemon-level-up_meloboom_tayakx.mp3"
);

let music = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979913/PokeCardsSongs/01.Tema_de_Pok%C3%A9mon_Pok%C3%A9mon_Theme_efcy08.flac"
);
let songs = [
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979913/PokeCardsSongs/01.Tema_de_Pok%C3%A9mon_Pok%C3%A9mon_Theme_efcy08.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979936/PokeCardsSongs/02.Tengo_Que_Ser_un_Maestro_Pok%C3%A9mon_2B_A_Master_il5apn.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979924/PokeCardsSongs/03.Ciudad_Viridian_Viridian_City_jb9eyt.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979924/PokeCardsSongs/04._Que_Clase_de_Pok%C3%A9mon_Eres_Tu_What_Kind_of_Pok%C3%A9mon_Are_You_nbv5ok.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979918/PokeCardsSongs/05.Mis_Mejores_Amigos_My_Best_Friend_mchyya.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979941/PokeCardsSongs/06.Todo_Cambia_Everything_Changes_xzr9zw.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979864/PokeCardsSongs/07.Llego_la_Hora_The_Time_Has_Come_scuagr.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979926/PokeCardsSongs/08.Pok%C3%A9mon_Dance_Mix_cqkuag.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979928/PokeCardsSongs/09.Equipo_Rocket_Double_Trouble_rcfgbg.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979946/PokeCardsSongs/10.Por_Siempre_Juntos_Together_Forever_pw5kug.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979943/PokeCardsSongs/11.Cancion_de_Misty_Misty_s_Song_slvyx0.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979912/PokeCardsSongs/12.Pok%C3%A9rap_Versi%C3%B3n_Completa_en_Espa%C3%B1ol_im4q1e.flac",
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1685979868/PokeCardsSongs/13.Querer_Es_Poder_You_Can_Do_It_gj6wxh.flac",
];

export function HeaderMusic(props) {
	let { volumen } = useSelector((state) => state.showVolumen);
	let { pokemons, resultsGame, winner, comparations } = useSelector(
		(state) => state.showCardsPokemons
	);
	const [currentSong, setCurrentSong] = useState(0);

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
	function NextAudio() {
		music.pause();
		let numeroPista = currentSong === songs.length - 1 ? 0 : currentSong + 1;
		setCurrentSong((prevSong) =>
			prevSong === songs.length - 1 ? 0 : prevSong + 1
		);

		music.src = songs[numeroPista];
		music.addEventListener("canplaythrough", () => {
			music.play();
		});
	}
	function PrevAudio() {
		music.pause();
		let numeroPista = currentSong === 0 ? songs.length - 1 : currentSong - 1;
		setCurrentSong((prevSong) =>
			prevSong === 0 ? songs.length - 1 : prevSong - 1
		);
		music.src = songs[numeroPista];
		music.addEventListener("canplaythrough", () => {
			music.play();
		});
	}

	return (
		<div className="reproductorMusica">
			<div>
				<button className="botonesMusica" onClick={PrevAudio}>
					<FaBackward></FaBackward>
				</button>
				<button
					className="botonesMusica"
					onClick={() => {
						music.play();
					}}
				>
					<FaPlay></FaPlay>
				</button>
				<button
					className="botonesMusica"
					onClick={() => {
						music.pause();
					}}
				>
					<FaPause></FaPause>
				</button>
				<button
					className="botonesMusica"
					onClick={() => {
						music.pause();
						music.src = songs[currentSong];
					}}
				>
					<FaStop></FaStop>
				</button>
				<button className="botonesMusica" onClick={NextAudio}>
					<FaForward></FaForward>
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
