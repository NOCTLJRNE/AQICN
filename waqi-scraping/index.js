const fs = require("fs");
const axios = require("axios");
const token = require("./token");
const month = require("./month");
const cities = require("./cities");
const admin = require("firebase-admin");
const serviceAccount = require("./keys/aqi-api-fa025-69e3ad30f3d2.json");

// console.log("Hello World", token);
const baseURL = "https://api.waqi.info/feed/";
const NhaTrang = "" + baseURL + "nha-trang/?token=" + token;
const Hue = "" + baseURL + "hue/?token=" + token;
const DaNang = "" + baseURL + "da-nang/?token=" + token;
const HoChiMinh_City = "" + baseURL + "ho-chi-minh-city/?token=" + token;
const HaNoi_US_Embassy =
  "" + baseURL + "vietnam/hanoi/us-embassy/?token=" + token;
const HaNoi_Unis = "" + baseURL + "vietnam/hanoi/unis/?token=" + token;
const HaNoi = "" + baseURL + "vietnam/hanoi/?token=" + token;

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
var db = admin.firestore();
// axios
//   .get(HoChiMinh_City)
//   .then(response => {
//     // console.log(response.data);
//     let name = response.data.data.city.name;
//     let aqi = response.data.data.aqi;
//     console.log(`City: ${name}, AQI: ${aqi}`);
//   })
//   .catch(error => console.error(error));
const urlArray = [
  NhaTrang,
  Hue,
  DaNang,
  HoChiMinh_City,
  HaNoi_US_Embassy,
  HaNoi_Unis,
  HaNoi
];
const requestArray = urlArray.map(url => axios.get(url));
axios
  .all(requestArray)
  .then(response => {
    let responseDataArray = [];
    let date = new Date();
    let seconds = date.getUTCSeconds();
    let minutes = date.getUTCMinutes();
    let hours = date.getUTCHours();
    let day = date.getUTCDate();
    let monthIndex = date.getUTCMonth();
    let year = date.getUTCFullYear();

    let timeString = `${year}-${month + 1}-${day}, ${hours + 1}:${minutes +
      1}:${seconds + 1}`;
    let fileName = `${year}-${month[monthIndex]}-${day}, ${hours +
      1}-${minutes + 1}-${seconds + 1}.json`;
    response.forEach((element, index) => {
      //   if (index == 0) {
      //     let docRef = db
      //       .collection("byCities")
      //       .doc("nha-trang")
      //       .collection("AQI_Data")
      //       .doc(fileName);
      //     docRef
      //       .set(element.data.data)
      //       .then(response => {
      //         // console.log(response);
      //       })
      //       .catch(error => {
      //         console.error(error);
      //       });
      //   }

      let docRef = db
        .collection("byCities")
        .doc(cities[index])
        .collection("AQI_Data")
        .doc(fileName);
      docRef
        .set(element.data.data)
        .then(response => {
          // console.log(response);
        })
        .catch(error => {
          console.error(error);
        });

      let name = element.data.data.city.name;
      let aqi = element.data.data.aqi;
      // console.log("Hello World");
      // console.log(
      //   `${year}-${month + 1}-${day}, ${hours + 1}:${minutes + 1}:${seconds + 1}`
      // );

      // fs.writeFileSync("/data/" + fileName, JSON.stringify(dataObject));
      let namedData = { name: name, ...element.data };
      // responseDataArray.push(element.data);
      responseDataArray.push(namedData);
      console.log(`City: ${name}, AQI: ${aqi}`);
    });

    let docRef = db.collection("byDate").doc(`${fileName}`);
    docRef
      .set({ array: responseDataArray })
      .then(response => {})
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });
