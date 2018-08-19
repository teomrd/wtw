import config from "../../config";
import api from "../api/api";
import { getEnglishDay, unixTimestampToDate } from "../../utils";

const normalizeForecastSlotsPerWeekDays = list =>
  list.reduce((acc, val) => {
    const forecastDate = unixTimestampToDate(val.dt);
    const weekDay = forecastDate.getDay();
    const { slots = {} } = acc[weekDay] || {};
    const { tempratures = [] } = acc[weekDay] || {};
    const { maxTemprature = -1000 } = acc[weekDay] || {};
    const { minTemprature = 1000 } = acc[weekDay] || {};

    return {
      ...acc,
      [weekDay]: {
        day: getEnglishDay(forecastDate),
        maxTemprature:
          val.main.temp > maxTemprature ? val.main.temp : maxTemprature,
        minTemprature:
          val.main.temp < minTemprature ? val.main.temp : minTemprature,
        slots: {
          [val.dt_txt]: {
            weather: val.weather[0],
            temprature: val.main.temp
          },
          ...slots
        }
      }
    };
  }, {});

const ForecastClient = {
  baseUrl: "http://api.openweathermap.org/data/2.5",
  getFiveDayForecast: function(city) {
    return api
      .get(`${this.baseUrl}/forecast`, {
        q: city,
        units: "metric", // Celsius
        appid: config.weatherApiKey
      })
      .then(({ list, city }) => {
        console.log("list", list);
        return {
          city: city.name,
          days: normalizeForecastSlotsPerWeekDays(list)
        };
      });
  }
};

export { ForecastClient };
