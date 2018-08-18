const config = {
  all: {
    env: process.env.NODE_ENV || "development",
    isDev: process.env.NODE_ENV !== "production",
    apiUrl: "",
    weatherApiKey: process.env.REACT_APP_WEATHER_API_KEY
  },
  test: {},
  development: {},
  production: {}
};

export default {
  ...config.all,
  ...config[config.all.env]
};
