import moment from "moment/moment";
import axios from "axios";

const API_KEY = "bbf5947563682b7c072e5d9861b27bb7";

export async function getWeather(query, controller) {
  let response;
  if (query.q)
    response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query.q}&units=metric&appid=${API_KEY}`,
      { signal: controller.signal }
    );
  else
    response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&units=metric&appid=${API_KEY}`,
      { signal: controller.signal }
    );

  if (response.status === 200) return filterData(response.data);
}

const filterData = (data) => {
  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

export function weatherIcons(image) {
  return `http://openweathermap.org/img/wn/${image}@2x.png`;
}

export function DateFormatter(dt) {
  return moment(dt * 1000).format("dddd, MMMM D YYYY");
}

export function TimeFormatter(dt) {
  return moment(dt * 1000).format("h:mm A");
}
