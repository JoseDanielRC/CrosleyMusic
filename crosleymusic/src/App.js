import Nav from "./components/Nav";
import Main from "./components/Main";
import React, { Component, useEffect, useState } from "react";
import "./Login.css";
import Login from "./Login";
import fire from "./Fire";
import firestore from "./Fire";
import "./App.scss";
import getWeb3 from "./getWeb3";
import Web3 from "web3";
import Albums from "./contracts/Albums.json";
import Migrations from "./contracts/Migrations.json";
const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [docid, setDocid] = useState("");
  let web3 = null;
  let accounts = null;
  let contract = null;
  const [albumes, setAlbumes] = useState([]);
  const [cancionesB, setCanciones] = useState([]);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = async () => {
    document.getElementById("titulo").innerHTML = "Iniciar Sesion";
    clearErrors();
    await fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
        alert(err);
      })
      .then(() => {});
  };
  const handleSignup = async () => {
    document.getElementById("titulo").innerHTML = "Crear Cuenta";
    clearErrors();
    await fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        await fire.firestore().collection("users").add({
          id: result.user.uid,
          email,
          password,
          URL: "https://moorestown-mall.com/noimage.gif",
          description: "",
          imgname: "",
          isonline: false,
          tarjetas: [],
          isverify: false,
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
    //setUID(fire.auth().currentUser.uid);
  };
  const handleLogout = () => {
    fire.auth().signOut();
    window.location.reload();
  };
  const authListener = async () => {
    await fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      }
    });
  };
  /*const addAlbumAddresses = async (addressAdd) => {
    albumAdresses.push(addressAdd);
  };*/
  const web3blockchain = async () => {
    try {
      // Get network provider and web3 mainInstance.
      const _web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await _web3.eth.getAccounts();

      // Get the contract mainInstance.
      //const networkId = 5777;
      //const web32 = new Web3("https://localhost:5777");
      // const networkId = await _web3.eth.net.getId();
      //const deployedNetwork = Migrations.networks[networkId];
      const mainInstance = new _web3.eth.Contract(
        Migrations.abi,
        "0xBB8cE0a4FE461e8577dcCc4505717Cb2940C941f"
      );
      console.log(mainInstance);
      mainInstance.address = "0xBB8cE0a4FE461e8577dcCc4505717Cb2940C941f";
      const mainInstance2 = new _web3.eth.Contract(
        Albums.abi,
        "0xDD94B007C727457294f01f6225B81ba522014BaD"
      );
      mainInstance2.address = "0xDD94B007C727457294f01f6225B81ba522014BaD";

      /*mainInstance.methods
        .addSong("101", "Otra noche en miami", "3:10", "Trap")
        .send({ from: accounts[0] });*/
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      //console.log("methods", mainInstance.methods);
      const cancionestemp = [];
      const albumestemp = [];
      //setAlbumAdresses(albumes);
      const songCount = await mainInstance.methods.songsCount().call();
      for (let index = songCount; index >= 1; index--) {
        const file = await mainInstance.methods.songs(index).call();
        //console.log("cancion", file);
        cancionestemp.push(file);
      }
      const albumCount = await mainInstance2.methods.albumsCount().call();
      for (let index = albumCount; index >= 1; index--) {
        const file = await mainInstance2.methods.albums(index).call();
        //console.log("album", file);
        albumestemp.push(file);
      }
      setAlbumes(albumestemp);
      setCanciones(cancionestemp);
    } catch (error) {
      alert(error);
    }
  };
  const agregarAlbum = async (id, nombre, artista) => {
    try {
      const _web3 = await getWeb3();
      const accounts = await _web3.eth.getAccounts();
      const mainInstance2 = new _web3.eth.Contract(
        Albums.abi,
        "0xDD94B007C727457294f01f6225B81ba522014BaD"
      );
      alert("312");
      mainInstance2.address = "0xDD94B007C727457294f01f6225B81ba522014BaD";
      mainInstance2.methods
        .addAlbum(id, nombre, artista)
        .send({ from: accounts[0] });
    } catch (error) {}
  };
  const agregarCancion = async (nombre, duracion, genero, idAlbum) => {
    const _web3 = await getWeb3();
    const accounts = await _web3.eth.getAccounts();
    const mainInstance = new _web3.eth.Contract(
      Migrations.abi,
      "0xBB8cE0a4FE461e8577dcCc4505717Cb2940C941f"
    );
    console.log(mainInstance);
    mainInstance.address = "0xBB8cE0a4FE461e8577dcCc4505717Cb2940C941f";
    mainInstance.methods
      .addSong(idAlbum, nombre, duracion, genero)
      .send({ from: accounts[0] });
  };
  useEffect(() => {
    authListener();
    web3blockchain();
    //agregarAlbum();
  }, []);
  return (
    <div>
      {user ? (
        <>
          <div className="outerWrap">
            <div className="App">
              <Nav handleLogout={handleLogout} />
              <Main
                addAlbum={agregarAlbum}
                albumes={albumes}
                canciones={cancionesB}
                addSong={agregarCancion}
              />
            </div>
            <div className="musicControls">
              Crosley Music Copyright ©2020
              <br />
              Jasser Ramos - Elias Giron <br /> Luis Enriquez
            </div>
          </div>
        </>
      ) : (
        <>
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        </>
      )}
    </div>
  );
};
export default App;
