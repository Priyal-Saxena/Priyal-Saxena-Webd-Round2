import React from "react";

const Player = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>${login}</h4>
      <p>player stats</p>
    </article>
  );
};

export default Player;
