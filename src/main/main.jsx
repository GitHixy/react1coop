import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import Btn from "../btn/Btn";
import InputText from "./inputText/InputText";
import Card from "./card/Card";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setUsers([...res.data]);

      setLoading(false);
    };
    loadUsers();
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
        ) : users.length > 0 ? (
          users.map((el) => <Card key={el.id} title={el.name} />)
        ) : (
          <h1>No Users found</h1>
        )}
      </div>
    </main>
  );
};

export default Main;
