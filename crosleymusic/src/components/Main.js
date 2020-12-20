import React, { useState } from 'react'
import Categories from './Categories'
import { Button, Input,Modal,ModalFooter,ModalBody,ModalHeader } from 'reactstrap';
import { Switch, Route } from 'react-router-dom'
import PlaylistPage from './pages/Playlist'

const Main = () => {
  const [InsertarAlbum, setModalnsertarAlbum] = useState(false);
  return (
    <div className="main">
      <div className="upperNav">dummy text</div>
      <div className="mainContent">
        <Button color="secondary" onClick={()=>setModalnsertarAlbum(true)}>Agregar Album+</Button>{' '}
        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/playlist/:id" component={PlaylistPage}></Route>
        </Switch>
      </div>
      <Modal
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '550px',
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
                name="precio1"
                id="precio1"
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
                name="Fecha"
                name="precio2"
                id="precio2"
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
        <Button color="success">Agregar</Button>{' '}
          <Button color='secondary' onClick={() => setModalnsertarAlbum(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Main
