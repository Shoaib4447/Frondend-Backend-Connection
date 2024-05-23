import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import JokeComp from "./components/JokeComp";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
    .get("/api/jokes")
    .then((response) => {
      setJokes(response.data);
    }
    )
    .catch((error)=>{
      console.log(error)
    });
  });

  return (
    <>
      <h1 className=" text-4xl font-bold  py-5 w-full">Chai or fullstack</h1>
      <p className="py-5 text-3xl uppercase">JOKES Lenght : {jokes.length}</p>
      <div className="flex flex-wrap justify-center items-center">
      {jokes.map((joke) => (
        <JokeComp key={joke.id} {...joke} />
      ))}
      </div>
    </>
  );
}

export default App;
