//api token- YE9STTXh54LjJl6kotJF3g94CzpaYuT0peMVZmwh822kqLmxACiLoyjfOnb6
import React, { Component } from "react";
import axios from "axios";
class Teams extends React.Component {
  state = {
    allTeams: [],
    isLoading: true,
    errors: null,
  };

  getUsers() {
    axios
      .get(
        "https://soccer.sportmonks.com/api/v2.0/teams/season/18334?api_token=YE9STTXh54LjJl6kotJF3g94CzpaYuT0peMVZmwh822kqLmxACiLoyjfOnb6"
      )
      .then((response) =>
        response.data.data.map((team) => ({
          name: `${team.name}`,
          twitter: `${team.twitter}`,

          image: `${team.logo_path}`,
        }))
      )
      .then((allTeams) => {
        this.setState({
          allTeams,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, allTeams } = this.state;
    return (
      <React.Fragment>
        <div>
          {!isLoading ? (
            allTeams.map((team) => {
              const { name, twitter, image } = team;
              return (
                <div key={name}>
                  <h3>{name}</h3>

                  <div>
                    <img src={image} alt={twitter} />
                  </div>
                  <p> twitter: {twitter}</p>

                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Teams;
