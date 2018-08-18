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
          const { tempratures = [] } = acc[weekDay] || {};
          const { maxTemprature = -1000 } = acc[weekDay] || {};
          const { minTemprature = 1000 } = acc[weekDay] || {};

          return {
            ...acc,
            [weekDay]: {
              tempratures: [val.main.temp, ...tempratures],
              day: englishDay,
              maxTemprature:
                val.main.temp > maxTemprature ? val.main.temp : maxTemprature,
              minTemprature:
                val.main.temp < minTemprature ? val.main.temp : minTemprature,
              slots: {
                [val.dt_txt]: {
                  temprature: val.main.temp
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
