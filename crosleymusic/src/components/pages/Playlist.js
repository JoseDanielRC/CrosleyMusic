import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../../svgs/play.svg";
import { ReactComponent as HeartIcon } from "../../svgs/heart.svg";
import { ReactComponent as NoteIcon } from "../../svgs/note.svg";
import {
  Button,
  Input,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Confirm } from "../Confirm.js";
import "../ConfirmStyle.css";

const PlaylistPage = (props) => {
  let { id } = useParams();
  let [canciones, setCanciones] = useState([
    {
      nombre: "Hola",
      artista: "Yo",
      duracion: "3:30",
      genero: "",
      idPlaylist: 101,
    },
  ]);
  const [album, setAlbum] = useState({
    id: 101,
    category_id: 1,
    name: "YHLQMDLG",
    img:
      "https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    desc: "Lorem ipsum",
  });
  const [InsertarCancion, setModalnsertarCancion] = useState(false);
  const [cancion, setCancion] = useState({
    nombre: "",
    artista: "",
    duracion: "",
    genero: "",
    idPlaylist: 0,
  });
  const renderCanciones = () => {
    return canciones.map((elemento) => {
      return elemento.idPlaylist == id ? (
        <ul className="songList">
          <li>
            <div className="songIcon">
              <NoteIcon className="noteI" />
              <PlayIcon className="playI" />
            </div>
            <div className="songDetails">
              <h3>{elemento.nombre}</h3>
              <span>{elemento.artista}</span>
            </div>
            <div className="songTime">
              <span>{elemento.duracion}</span>
            </div>
          </li>
        </ul>
      ) : (
        <h1>No hay canciones en este album</h1>
      );
    });
  };
  const guardarcancion = () => {
    alert(id);
    const nuevascanciones = [];
    cancion.nombre = document.getElementById("nombre").value;
    cancion.duracion = document.getElementById("duracion").value;
    cancion.artista = document.getElementById("artista").value;
    cancion.genero = document.getElementById("genero").value;
    cancion.idPlaylist = id;
    canciones.push(cancion);
    for (let index = 0; index < canciones.length; index++) {
      const element = canciones[index];
      nuevascanciones.push(element);
    }
    setCanciones(nuevascanciones);
    setModalnsertarCancion(false);
    renderCanciones();
    Confirm.open({
      title: "Aviso",
      message: `¡Cancion ${cancion.nombre} Agregada!`,
      onok: () => {},
    });
  };
  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <Modal
              style={{
                height: "95vh",
                "overflow-y": "auto",
                top: "20px",
                maxWidth: "550px",
              }}
              isOpen={InsertarCancion}
            >
              <ModalHeader>
                <div className="text-center">
                  <h3>Agregar Album</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="form-group">
                  <label>Nombre</label>
                  <Input
                    className="form-control"
                    type="text"
                    name="Nombre"
                    id="nombre"
                    errorMessage="Este Campo es Obligatorio"
                    validate={{
                      required: { value: true },
                    }}
                  />

                  <br />
                  <label>Artista</label>
                  <Input
                    className="form-control"
                    type="text"
                    name="Artista"
                    name="artista"
                    id="artista"
                    validate={{
                      required: { value: false },
                    }}
                    // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                    // onChange={manejarCambio}
                  />
                  <br />
                  <label>Duracion</label>
                  <Input
                    className="form-control"
                    type="text"
                    name="Duracion"
                    name="duracion"
                    id="duracion"
                    validate={{
                      required: { value: false },
                    }}
                    // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                    // onChange={manejarCambio}
                  />
                  <br />
                  <label>Genero</label>
                  <Input
                    className="form-control"
                    type="text"
                    name="genero"
                    name="genero"
                    id="genero"
                    validate={{
                      required: { value: false },
                    }}
                    // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                    // onChange={manejarCambio}
                  />
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => guardarcancion()}>
                  Agregar
                </Button>{" "}
                <Button
                  color="secondary"
                  onClick={() => setModalnsertarCancion(false)}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
            <img src={album.img} alt="pic" />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Album</p>
            <h1>{album.name}</h1>
            <Button
              color="secondary"
              onClick={() => setModalnsertarCancion(true)}
            >
              Agregar Cancion+
            </Button>{" "}
            <p className="tagline">{album.desc}</p>
            <div className="playlistPageDesc">
              <p className="spotify">CrosleyMusic</p>
              <span>699,428 likes</span>
              <span>4hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>
        </div>
        {renderCanciones()}
      </div>
    </div>
  );
};

export default PlaylistPage;
