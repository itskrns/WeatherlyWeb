import { AttributeList } from "./AttributeList";
import { weatherIcons } from "./helper";

const attributes = [
  { src: "feels_like", name: "feels like", unit: "°" },
  { src: "speed", name: "Wind Speed", unit: "km/hr" },
  { src: "humidity", name: "humidity", unit: "%" },
];

export function Weather({ weather }) {
  return (
    <div className="weather">
      <p>{weather.details}</p>

      <div>
        <img
          src={weatherIcons(weather.icon)}
          alt="weather-icon"
          className="weather__icon"
        />
        <span>{weather.temp.toFixed()}°</span>
      </div>

      <div>
        <AttributeList attributes={attributes} weather={weather} />
      </div>
    </div>
  );
}
