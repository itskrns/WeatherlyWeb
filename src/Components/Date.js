import { DateFormatter } from "./helper";

export function Date({ date, city, country }) {
  return (
    <div className="date-time">
      <p>{DateFormatter(date)}</p>
      <p>
        {city}, {country}
      </p>
    </div>
  );
}
