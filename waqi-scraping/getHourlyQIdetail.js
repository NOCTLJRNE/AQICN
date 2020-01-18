// const axios = require("axios");
const fs = require("fs");
const serviceAccount = require("./keys/cemvn-api-4f40d91847ec.json");
const citiesArray = require("./citiesRequestsArray");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
const AQIhourlyDataBaseURL =
  "http://enviinfo.cem.gov.vn/eip/default/call/json/get_aqi_data%3Fdate%3D1%26aqi_type%3D1";
const widgetAPI =
  "http://enviinfo.cem.gov.vn/eip/default/call/json/get_chart_for_widget_aqi";
const QIdetailEIP_baseURL =
  "http://enviinfo.cem.gov.vn/eos/services/call/json/qi_detail_for_eip";
const QIdetail24h_baseURL =
  "http://enviinfo.cem.gov.vn/eos/services/call/json/qi_detail_24h";
const AQIdailyDataBaseURL =
  "http://enviinfo.cem.gov.vn/eip/default/call/json/get_aqi_data%3Fdate%3D30%26aqi_type%3D0";
const getIndicatorsDataBaseURL =
  "http://enviinfo.cem.gov.vn/eip/default/call/json/get_indicators_have_data";
const regexp1 = /(\".*?\")/g;
const regexp2 = /([0-3].*?00)/g;
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
var db = admin.firestore();

citiesArray.forEach(element => {
  fetch(QIdetailEIP_baseURL, element.QIdetailEIPform)
    .then(response => response.json())
    .then(json => {
      let data = { ...json };
      data.city = element.city;
      //   let at_time = data.at_time.match(regexp2);
      let at_time_replaced = data.qi_time_2.replace(/\//g, "-");
      //   console.log(data.chart.title);
      //   console.log(at_time_replaced);
      let docRef = db
        .collection("byCities")
        .doc(element.city)
        .collection("Hourly-QI-Detail-Data")
        .doc(at_time_replaced);
      docRef
        .set(data)
        .then(response => {})
        .catch(error => console.error(error));
      let at_time_replaced2 = at_time_replaced.replace(/\s/g, "_");
      let at_time_replaced3 = at_time_replaced2.replace(/:/g, "h");
      fs.writeFileSync(
        `data/CEM/${element.city}/Hourly-QI-Detail-Data/${at_time_replaced3}.json`,
        JSON.stringify(data)
      );
    })
    .catch(error => {
      console.error(error);
    });
});

// citiesArray.forEach(element => {
//   fetch(QIdetailEIP_baseURL, element.QIdetailEIPform)
//     .then(response => response.json())
//     .then(json => {
//       let data = { ...json };
//       data.city = element.city;
//       console.log(data.station_name);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// citiesArray.forEach(element => {
//   fetch(QIdetail24h_baseURL, element.QIdetail24hForm)
//     .then(response => response.json())
//     .then(json => {
//       let data = { ...json };
//       data.city = element.city;
//       console.log(data.station_name);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// citiesArray.forEach(element => {
//   fetch(AQIdailyDataBaseURL, element.dailyAQIform)
//     .then(response => response.json())
//     .then(json => {
//       let data = { ...json };
//       data.city = element.city;
//       //   console.log(`${data.city}: `, data.aaData[0][1]);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });
