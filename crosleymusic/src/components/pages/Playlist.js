import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'
import { Button, Input, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';

const PlaylistPage = () => {
  let { id } = useParams()
  let canciones = [{
    nombre: 'Hola',
    artista: 'Yo',
    duracion: '3:30',
    genero: '',
  }];
  const [InsertarCancion, setModalnsertarCancion] = useState(false);
  const [cancion, setCancion] = useState({
    nombre: '',
    artista: '',
    duracion: '',
    genero: '',

  });
  const guardarcancion = () => {
    cancion.nombre = document.getElementById('nombre').value;
    cancion.duracion = document.getElementById('duracion').value;
    cancion.artista = document.getElementById('artista').value;
    cancion.genero = document.getElementById('genero').value;
    alert(JSON.stringify(cancion));
    canciones.push(cancion);
    alert(JSON.stringify(canciones));
    alert(document.getElementById('nombre').value);
    setModalnsertarCancion(false)

  }
  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <Modal
              style={{
                height: '95vh',
                'overflow-y': 'auto',
                top: '20px',
                maxWidth: '550px',
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
                <Button color="success" onClick={() => guardarcancion()}>Agregar</Button>{' '}
                <Button color='secondary' onClick={() => setModalnsertarCancion(false)}>
                  Cancelar
          </Button>
              </ModalFooter>
            </Modal>
            <img
              src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>A Perfect Day</h1>
            <Button color="secondary" onClick={() => setModalnsertarCancion(true)}>Agregar Cancion+</Button>{' '}
            <p className="tagline">
              Minimalism, electronica and modern classical to concentrate to.
            </p>
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

        {canciones.map((elemento) => (

          <ul className="songList"  >
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3 >{elemento.nombre}</h3>
                <span>{elemento.artista}</span>
              </div>
              <div className="songTime">
                <span>{elemento.duracion}</span>
              </div>
            </li>
          </ul>
        ))}


      </div>
    </div>
  )
}

export default PlaylistPage
