import React, { useEffect } from "react";
import Particles from "react-particles-js";
//import { firestore } from "./Firebase/config";
import cookie from "cookie";

export default function Background() {
  // Set Cookies
  var setCookie = cookie.serialize(
    "backgroundURL",
    "https://images-ext-2.discordapp.net/external/K08-gZkKeA6rNXGtnqzHTtuR6HDjQMQkCdzMzNCEuhE/https/negativespace.co/wp-content/uploads/2017/06/thumb-negative-space-football-match-night-lights-abigail-keenan-1.jpg?width=1052&height=701",
    {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 day
    }
  );
  var tt = cookie.parse(setCookie);
  // console.log(tt);
  console.log(tt.backgroundURL);

  useEffect(() => {
    //   const docRef = firestore
    //     .collection("Wallpaper")
    //     .orderBy("date", "desc")
    //     .limit(3);
    //   docRef.get().then((snapshot) => {
    //     const data = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }));
    //     document.body.style.backgroundImage = `url(${data[0].url})`;
    //   });
    document.body.style.backgroundImage = `url(${tt.backgroundURL})`;
  });

  return <></>;
}
