import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";
import PlaylistPage from "./pages/Playlist";

const Main = (props) => {
  return (
    <div className="main">
      <div className="mainContent">
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Categories
                addAlbum={props.addAlbum}
                albumes={props.albumes}
                canciones={props.canciones}
                addSong={props.addSong}
              />
            )}
          ></Route>
          <Route path="/search">
            <h1>Naruto es el mero queso</h1>
          </Route>
          <Route path="/your-library">
            <h1>Viva Naruto</h1>
          </Route>
          <Route path="/playlist/:id" component={PlaylistPage}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
