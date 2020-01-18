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
const regexp = /(\".*?\")/g;
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
var db = admin.firestore();

// get hourly AQI data
citiesArray.forEach(element => {
  let indicators = [];
  fetch(getIndicatorsDataBaseURL, element.getIndicatorsDataForm)
    .then(response => response.json())
    .then(json => {
      let data = { ...json };
      let indicatorsRaw = data.html.match(regexp);
      indicators = indicatorsRaw.map(str => str.slice(1, str.length - 1));
      //   console.log(data);
      //   indicators.forEach(indicator => console.log(indicator));
      return fetch(AQIdailyDataBaseURL, element.dailyAQIform);
    })
    .then(response => response.json())
    .then(json => {
      let data = { ...json };
      data.city = element.city;
      //   console.log(data);
      let atTime = data.aaData[0][1];
      atTime = atTime.replace(/\//g, "-");
      let newData = data.aaData.map(element => {
        let tempObject = {};
        element.forEach((element, index) => {
          if (index == 0) {
            tempObject.index = element;
          } else if (index == 1) {
            tempObject.moment = element;
          } else if (index == 2) {
            tempObject.aqi = element;
          } else {
            tempObject[indicators[index - 3]] = element;
          }
        });
        return tempObject;
      });
      //   console.log(newData);
      let docRef = db
        .collection("byCities")
        .doc(element.city)
        .collection("Daily-AQI-Data")
        .doc(atTime);
      docRef
        //   .set({ ...data.aaData[0] })
        .set({ ...newData })
        .then(response => {})
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
});

// citiesArray.forEach(element => {
//   fetch(AQIhourlyDataBaseURL, element.hourlyAQIform)
//     .then(response => response.json())
//     .then(json => {
//       let data = { ...json };
//       data.city = element.city;
//       console.log(data);
//       let atTime = data.aaData[0][1];
//       atTime = atTime.replace(/\//g, "-");

//       //   let docRef = db
//       //     .collection("byCities")
//       //     .doc(element.city)
//       //     .collection("Hourly-AQI-Data")
//       //     .doc(atTime);
//       //   docRef
//       //     .set({ ...data.aaData[0] })
//       //     .then(response => {})
//       //     .catch(error => console.error(error));
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// citiesArray.forEach(element => {
//   fetch(widgetAPI, element.widgetAQIform)
//     .then(response => response.json())
//     .then(json => {
//       let data = { ...json };
//       data.city = element.city;
//       console.log(data.chart.title);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

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
