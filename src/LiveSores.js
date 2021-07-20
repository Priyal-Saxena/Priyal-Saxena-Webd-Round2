import React, { Component } from "react";

class LiveSores extends Component {
  state = {
    loading: true,
    scores: null,
    LocalTeam: "",
    VisitorTeam: "",
    Local: 0,
    Visitor: 0,
  };

  async componentDidMount() {
    const url =
      "https://soccer.sportmonks.com/api/v2.0/livescores/now?api_token=YE9STTXh54LjJl6kotJF3g94CzpaYuT0peMVZmwh822kqLmxACiLoyjfOnb6";
    const response = await fetch(url);
    const obj = await response.json();
    if (obj.data[0]) {
      this.setState({
        scores: obj.data[0],
        LTScore: obj.data[0].scores.localteam_score,
        VTScore: obj.data[0].scores.visitorteam_score,
      });
    }
    console.log(obj.data[0]);

    if (obj.data[0]) {
      const url1 =
        "https://soccer.sportmonks.com/api/v2.0/teams/" +
        `${obj.data[0].localteam_id}?api_token=YE9STTXh54LjJl6kotJF3g94CzpaYuT0peMVZmwh822kqLmxACiLoyjfOnb6`;
      const ans1 = await fetch(url1);
      const team1 = await ans1.json();

      this.setState({
        LocalTeam: team1.data.name,
      });
      const url2 =
        "https://soccer.sportmonks.com/api/v2.0/teams/" +
        `${obj.data[0].visitorteam_id}?api_token=YE9STTXh54LjJl6kotJF3g94CzpaYuT0peMVZmwh822kqLmxACiLoyjfOnb6`;
      const ans2 = await fetch(url2);
      const team2 = await ans2.json();

      this.setState({
        VisitingTeam: team2.data.name,
      });
    }

    this.setState({ loading: false });
  }
  render() {
    return (
      <div style={{ color: "white" }}>
        <h1>Live Scores</h1>
        <div>
          {this.state.loading ? (
            <div style={{ paddingLeft: "2em" }}>
              <p>Loading...</p>
            </div>
          ) : !this.state.loading && !this.state?.scores ? (
            <div>Currently No Matches Are Taking Place.</div>
          ) : (
            <div>
              <div>
                {this.state.LocalTeam} VS. {this.state.VisitorTeam}
              </div>
              <div>
                {this.state.Local} - {this.state.Visitor}
              </div>
            </div>
          )}
          <div>
            <p>--------</p>
            <ul></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveSores;
