const hoursLength = 24;
const daysLength = 31;
module.exports = [
  {
    city: "Ha-Noi",
    hourlyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${hoursLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28560877461938780203765592307&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    widgetAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28560877461938780203765592307&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetailEIPform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28560877461938780203765592307&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetail24hForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28560877461938780203765592307",
      method: "POST",
      mode: "cors"
    },
    dailyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${daysLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28560877461938780203765592307&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    getIndicatorsDataForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28560877461938780203765592307&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    }
  },
  {
    city: "Thua-Thien-Hue",
    hourlyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${hoursLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28505511563898617211441001382&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    widgetAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505511563898617211441001382&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetailEIPform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505511563898617211441001382&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetail24hForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505511563898617211441001382",
      method: "POST",
      mode: "cors"
    },
    dailyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${daysLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28505511563898617211441001382&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    getIndicatorsDataForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505511563898617211441001382&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    }
  },
  {
    city: "Nha-Trang",
    hourlyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=7&sColumns=%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${hoursLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&sSearch=&bRegex=false&station_id=28505263793630246854465636760&added_columns=CO%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    widgetAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505263793630246854465636760&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetailEIPform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505263793630246854465636760&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetail24hForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505263793630246854465636760",
      method: "POST",
      mode: "cors"
    },
    dailyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${daysLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28505263793630246854465636760&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    getIndicatorsDataForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505263793630246854465636760&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    }
  },
  {
    city: "Viet-Tri",
    hourlyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=8&sColumns=%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${hoursLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&sSearch=&bRegex=false&station_id=28505268571336961948594948504&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5`,
      method: "POST",
      mode: "cors"
    },
    widgetAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505268571336961948594948504&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetailEIPform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505268571336961948594948504&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetail24hForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505268571336961948594948504",
      method: "POST",
      mode: "cors"
    },
    dailyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${daysLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28505268571336961948594948504&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    getIndicatorsDataForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505268571336961948594948504&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    }
  },
  {
    city: "Da-Nang",
    hourlyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${hoursLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28505272740301122608933325208&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    widgetAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505272740301122608933325208&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetailEIPform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505272740301122608933325208&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetail24hForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505272740301122608933325208",
      method: "POST",
      mode: "cors"
    },
    dailyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${daysLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28505272740301122608933325208&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    getIndicatorsDataForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505272740301122608933325208&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    }
  },
  {
    city: "Quang-Ninh",
    hourlyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=7&sColumns=%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${hoursLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&sSearch=&bRegex=false&station_id=28505279528702941738980821400&added_columns=NO2%2CO3%2CPM-10%2CPM-2-5`,
      method: "POST",
      mode: "cors"
    },
    widgetAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505279528702941738980821400&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetailEIPform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505279528702941738980821400&station_type=4",
      method: "POST",
      mode: "cors"
    },
    QIdetail24hForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: "station_id=28505279528702941738980821400",
      method: "POST",
      mode: "cors"
    },
    dailyAQIform: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `sEcho=1&iColumns=9&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=${daysLength}&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch=&bRegex=false&station_id=28505279528702941738980821400&added_columns=CO%2CNO2%2CO3%2CPM-10%2CPM-2-5%2CSO2`,
      method: "POST",
      mode: "cors"
    },
    getIndicatorsDataForm: {
      credentials: "include",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer: "http://enviinfo.cem.gov.vn/",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "station_id=28505279528702941738980821400&from_public=1&station_type=4",
      method: "POST",
      mode: "cors"
    }
  }
];
