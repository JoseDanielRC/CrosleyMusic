import React, { useRef, useEffect, useState } from "react";
import Playlists from "./Playlists";

const Categories = () => {
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
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          <p className="subText">{category.tagline}</p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
