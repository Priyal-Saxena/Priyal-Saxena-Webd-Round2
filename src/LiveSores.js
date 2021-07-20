import React from "react";
import { withRouter } from "react-router";

const LiveSores = () => {
  return (
    <div id="home">
      <div id="homeContent">
        <div className="page-title">Home Page1</div>
        <h3> LiveSores </h3>
      </div>
    </div>
  );
};

export default withRouter(LiveSores);

// import React, { Component } from "react";

// //For recent matches
// //https://soccer.sportmonks.com/api/v2.0/livescores?api_token=k4TCi3OBkDK19SLlbzLlpgidCUUHSPG2OJCew3Su3rHK6WoyKmQr0tE1Dfxa
// //For a mach happening right now
// //https://soccer.sportmonks.com/api/v2.0/livescores/now?api_token=k4TCi3OBkDK19SLlbzLlpgidCUUHSPG2OJCew3Su3rHK6WoyKmQr0tE1Dfxa

// class LiveScores extends Component {
//   state = {
//     loading: true,
//     scores: null,
//     LocalTeam: "",
//     VisitingTeam: "",
//     LTCode: "",
//     VTCode: "",
//     LTScore: 0,
//     VTScore: 0,
//   };

//   async componentDidMount() {
//     const url =
//       "https://soccer.sportmonks.com/api/v2.0/livescores/now?api_token=Lk562oZF4d0GDRECNVPpEckLIF055scOL53PUalK60VQhVDTI3KZjinpYhxt";
//     const response = await fetch(url);
//     const obj = await response.json();
//     if (obj.data[0]) {
//       this.setState({
//         scores: obj.data[0],
//         LTScore: obj.data[0].scores.localteam_score,
//         VTScore: obj.data[0].scores.visitorteam_score,
//       });
//     }
//     console.log(obj.data[0]);
//     // console.log(obj.data[0].localteam_id, obj.data[0].visitorteam_id);

//     if (obj.data[0]) {
//       const url1 =
//         "https://soccer.sportmonks.com/api/v2.0/teams/" +
//         `${obj.data[0].localteam_id}?api_token=Lk562oZF4d0GDRECNVPpEckLIF055scOL53PUalK60VQhVDTI3KZjinpYhxt`;
//       const ans1 = await fetch(url1);
//       const team1 = await ans1.json();
//       // console.log(team1.data);
//       // console.log(team1.data.name);
//       this.setState({
//         LocalTeam: team1.data.name,
//         LTCode: team1.data.short_code,
//       });
//     }

//     if (obj.data[0]) {
//       const url2 =
//         "https://soccer.sportmonks.com/api/v2.0/teams/" +
//         `${obj.data[0].visitorteam_id}?api_token=Lk562oZF4d0GDRECNVPpEckLIF055scOL53PUalK60VQhVDTI3KZjinpYhxt`;
//       const ans2 = await fetch(url2);
//       const team2 = await ans2.json();
//       // console.log(team2.data.name);
//       this.setState({
//         VisitingTeam: team2.data.name,
//         VTCode: team2.data.short_code,
//       });
//     }

//     this.setState({ loading: false });
//   }
//   render() {
//     return (
//       <div className="view">
//         <h1>LiveScores</h1>
//         <div className="content">
//           {this.state.loading ? (
//             <div style={{ paddingLeft: "2em" }}>
//               <svg
//                 width="72px"
//                 height="72px"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 100 100"
//                 preserveAspectRatio="xMidYMid"
//                 className="uil-default"
//               >
//                 <rect
//                   x="0"
//                   y="0"
//                   width="100"
//                   height="100"
//                   fill="none"
//                   className="bk"
//                 ></rect>
//                 <rect
//                   x="46.5"
//                   y="42.5"
//                   width="7"
//                   height="15"
//                   rx="5"
//                   ry="5"
//                   fill="#dd5629"
//                   transform="rotate(0 50 50) translate(0 -20)"
//                 >
//                   {" "}
//                   <animate
//                     attributeName="opacity"
//                     from="1"
//                     to="0"
//                     dur="1s"
//                     begin="0s"
//                     repeatCount="indefinite"
//                   />
//                 </rect>
//                 <rect
//                   x="46.5"
//                   y="42.5"
//                   width="7"
//                   height="15"
//                   rx="5"
//                   ry="5"
//                   fill="#dd5629"
//                   transform="rotate(51.42857142857143 50 50) translate(0 -20)"
//                 >
//                   {" "}
//                   <animate
//                     attributeName="opacity"
//                     from="1"
//                     to="0"
//                     dur="1s"
//                     begin="0.14285714285714285s"
//                     repeatCount="indefinite"
//                   />
//                 </rect>
//                 <rect
//                   x="46.5"
//                   y="42.5"
//                   width="7"
//                   height="15"
//                   rx="5"
//                   ry="5"
//                   fill="#dd5629"
//                   transform="rotate(102.85714285714286 50 50) translate(0 -20)"
//                 >
//                   {" "}
//                   <animate
//                     attributeName="opacity"
//                     from="1"
//                     to="0"
//                     dur="1s"
//                     begin="0.2857142857142857s"
//                     repeatCount="indefinite"
//                   />
//                 </rect>
//                 <rect
//                   x="46.5"
//                   y="42.5"
//                   width="7"
//                   height="15"
//                   rx="5"
//                   ry="5"
//                   fill="#dd5629"
//                   transform="rotate(154.28571428571428 50 50) translate(0 -20)"
//                 >
//                   {" "}
//                   <animate
//                     attributeName="opacity"
//                     from="1"
//                     to="0"
//                     dur="1s"
//                     begin="0.42857142857142855s"
//                     repeatCount="indefinite"
//                   />
//                 </rect>
//                 <rect
//                   x="46.5"
//                   y="42.5"
//                   width="7"
//                   height="15"
//                   rx="5"
//                   ry="5"
//                   fill="#dd5629"
//                   transform="rotate(205.71428571428572 50 50) translate(0 -20)"
//                 >
//                   {" "}
//                   <animate
//                     attributeName="opacity"
//                     from="1"
//                     to="0"
//                     dur="1s"
//                     begin="0.5714285714285714s"
//                     repeatCount="indefinite"
//                   />
//                 </rect>
//                 <rect
//                   x="46.5"
//                   y="42.5"
//                   width="7"
//                   height="15"
//                   rx="5"
//                   ry="5"
//                   fill="#dd5629"
//                   transform="rotate(257.14285714285717 50 50) translate(0 -20)"
//                 >
//                   {" "}
//                   <animate
//                     attributeName="opacity"
//                     from="1"
//                     to="0"
//                     dur="1s"
//                     begin="0.7142857142857143s"
//                     repeatCount="indefinite"
//                   />
//                 </rect>
//                 <rect
//                   x="46.5"
//                   y="42.5"
//                   width="7"
//                   height="15"
//                   rx="5"
//                   ry="5"
//                   fill="#dd5629"
//                   transform="rotate(308.57142857142856 50 50) translate(0 -20)"
//                 >
//                   {" "}
//                   <animate
//                     attributeName="opacity"
//                     from="1"
//                     to="0"
//                     dur="1s"
//                     begin="0.8571428571428571s"
//                     repeatCount="indefinite"
//                   />
//                 </rect>
//               </svg>
//             </div>
//           ) : (
//             <h2>Scores loaded</h2>
//           )}
//           {!this.state.loading && !this.state?.scores ? (
//             <div>There is no ongoing match</div>
//           ) : (
//             <div>
//               <div>
//                 {this.state.LocalTeam} ({this.state.LTCode}) VS.{" "}
//                 {this.state.VisitingTeam} ({this.state.VTCode})
//               </div>
//               <div>
//                 {this.state.LTScore} - {this.state.VTScore}
//               </div>
//             </div>
//           )}
//           <div className="content--inner">
//             <h2>Would display the scores here🔼</h2>
//             <ul>
//               <li>
//                 <a href="https://soccer.sportmonks.com/api/v2.0/livescores?api_token=k4TCi3OBkDK19SLlbzLlpgidCUUHSPG2OJCew3Su3rHK6WoyKmQr0tE1Dfxa">
//                   For recent Matches
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LiveScores;
