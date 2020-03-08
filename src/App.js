import React, { Component } from "react";

import Title from "./Title";
import TitlePureFunction from "./TitlePureFunction";
import Square from "./Square";
import Button from "./Button";
import LikeButton from "./Likebutton";
import SearchButton from "./SearchButton";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title name="Ricardo" lastName="Rodrigues" />
        <TitlePureFunction name="Ricardo" lastName="Rodrigues" />
        <Square color="blue" />
        <Square />
        {["black", "yellow", "red", "gray", "black"].map((square, index) => (
          <Square key={index} color={square} />
        ))}
        <div
          onClick={e => {
            alert("Clicou");
          }}
        >
          <Square />
        </div>
        <br />
        <Button>Texto Children</Button>
        <LikeButton />
        <SearchButton />
      </div>
    );
  }
}
export default App;
