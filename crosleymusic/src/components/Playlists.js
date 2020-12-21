import React, { useState, useEffect } from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Confirm } from "./Confirm.js";
import "./ConfirmStyle.css";

const Playlists = (props) => {
  const [InsertarAlbum, setModalnsertarAlbum] = useState(false);
  const [dataPlaylists, setdataPlaylist] = useState([
    {
      id: 101,
      category_id: 1,
      name: "Home playlist 1",
      img:
        "https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 102,
      category_id: 1,
      name: "Home playlist 2",
      img:
        "https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 1,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus playlist 1",
      img:
        "https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 105,
      category_id: 1,
      name: "Sunday playist",
      img:
        "https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 106,
      category_id: 1,
      name: "Mood playist 1 ",
      img:
        "https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 107,
      category_id: 1,
      name: "Mood playist 2",
      img:
        "https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      desc: "Lorem ipsum",
    },
  ]);

  let matchedPlaylists = dataPlaylists.filter((playlist) => playlist);
  const agregarAlbum = () => {
    const nuevosAlbums = [];
    const id2 = dataPlaylists[dataPlaylists.length - 1].id + 1;
    const nombre2 = document.getElementById("nombre").value;
    const img2 =
      "https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
    const artista2 = document.getElementById("artista").value;
    nuevosAlbums.push({
      id: id2,
      category_id: 1,
      name: nombre2,
      img: img2,
      desc: artista2,
    });
    for (let index = 0; index < dataPlaylists.length; index++) {
      const element = dataPlaylists[index];
      nuevosAlbums.push(element);
    }
    setdataPlaylist(nuevosAlbums);
    renderPlaylists();
    Confirm.open({
      title: "Aviso",
      message: `¡Album ${nombre2} Agregado!`,
      onok: () => {},
    });
    setModalnsertarAlbum(false);
  };
  const renderPlaylists = () => {
    return matchedPlaylists.map((playlist, id) => (
      <Link to={`/playlist/` + playlist.id} key={id}>
        <div className="card" key={id}>
          <div className="cardImage">
            <img src={playlist.img} alt="Pic 1" />
          </div>
          <div className="cardContent">
            <h3>{playlist.name}</h3>
            <span>{playlist.desc}</span>
          </div>
          <span className="playIcon">
            <PlayIcon />
          </span>
        </div>
      </Link>
    ));
  };
  //useEffect(dataPlaylists);
  return (
    <div>
      <div style={{ width: "200px" }}>
        <Button
          color="secondary"
          maxWidth="100px"
          onClick={() => setModalnsertarAlbum(true)}
        >
          Agregar Album+
        </Button>
      </div>
      <br />
      <div className="cardsWrapInner">
        {renderPlaylists()}
        <Modal
          style={{
            height: "95vh",
            "overflow-y": "auto",
            top: "20px",
            maxWidth: "550px",
          }}
          isOpen={InsertarAlbum}
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
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={agregarAlbum}>
              Agregar
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => setModalnsertarAlbum(false)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default Playlists;
