import config from "../../config";
import api from "../api/api";
import { unixTimeToDay, englishDays } from "../../utils";

const ForecastClient = {
  baseUrl: "http://api.openweathermap.org/data/2.5",
  getFiveDayForecast: function(city) {
    return api
      .get(`${this.baseUrl}/forecast`, {
        q: city,
        units: "metric", // Celsius
        appid: config.weatherApiKey
      })
      .then(response => {
        console.log(response);
        const { list } = response;
        const days = list.reduce((acc, val) => {
          const weekDay = unixTimeToDay(val.dt);
          const englishDay = englishDays[weekDay];
          const { slots = {} } = acc[weekDay] || {};
          return {
            ...acc,
            [weekDay]: {
              day: englishDay,
              // maxTemprature: "",
              // minTemprature: "",
              slots: {
                [val.dt_txt]: {
                  ...val
                },
                ...slots
              }
            }
          };
        }, {});
        return {
          city: response.city.name,
          days
        };
      });
  }
};

export { ForecastClient };
