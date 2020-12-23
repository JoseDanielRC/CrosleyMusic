import React, { useRef, useEffect, useState } from "react";
import Playlists from "./Playlists";

const Categories = (props) => {
  const { albumes, canciones, addAlbum } = props;
  const [limiter, setLimiter] = useState(0);
  const mainInnerRef = useRef();
  const dataCategories = [
    {
      id: 1,
      name: "Crosley Music Playlist",
      tagline: "Musica para tus oidos",
    },
  ];

  useEffect(() => {
    // function
    const handleWindowResize = () => {
      // calculation
      const calculation = Math.floor(
        mainInnerRef.current.getBoundingClientRect().width / 195
      );

      setLimiter(calculation);
    };

    handleWindowResize();

    // assign event listener
    window.addEventListener("resize", handleWindowResize);

    // remove event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="mainInner" ref={mainInnerRef}>
      <div className="cardsWrap" key={dataCategories[0].id}>
        <h2>{dataCategories[0].name}</h2>
        <p className="subText">{dataCategories[0].tagline}</p>
        <Playlists
          albumes={albumes}
          canciones={canciones}
          category_id={dataCategories[0].id}
          addAlbum={addAlbum}
          addSong={props.addSong}
        />
      </div>
    </div>
  );
};

export default Categories;
