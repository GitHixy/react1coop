import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import Btn from "../btn/Btn";
import InputText from "./inputText/InputText";
import Card from "./card/Card";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const loadSongs = async () => {
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setSongs(res.data);

      setLoading(false);
    };
    loadSongs();
  }, []);

  return (
    <main>
      <Btn className="mainBtn" text="Explore The World" />
      <h1>
        Experience all <br /> the delights of <br />
        <span>the Alps</span>
      </h1>
      <p>Find the best spots in the Alps</p>
      <InputText />
      <div className="card_wrapper">
        {loading ? (
          <h1>Loading...</h1>
        ) : songs.length > 0 ? (
          songs.map((el) => <Card key={el.id} title={el.name} />)
        ) : (
          <h1>No songs found</h1>
        )}
      </div>
    </main>
  );
};

export default Main;
