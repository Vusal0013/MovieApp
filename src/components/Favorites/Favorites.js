import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Favorites.css";

const Favorites = () => {
  const [listName, setListName] = useState("");
  const movies = useSelector((store) => store.favoriteReducer.favorite);
  return (
    <div className="favorites">
      <input
        placeholder="List Name"
        onChange={(e) => setListName(e.target.value)}
        value={listName}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {movies.map((item) => {
          return (
            <li key={item.imdbID}>
              {item.Title} ({item.Year})
            </li>
          );
        })}
      </ul>
      <button type="button" className="favorites__save">
        Сохранить список
      </button>
    </div>
  );
};

export default Favorites;
