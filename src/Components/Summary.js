import { AttributeList } from "./AttributeList";

const attributes = [
  { src: "sunrise", name: "sunset", unit: "" },
  { src: "sunset", name: "sunrise", unit: "" },
  { src: "temp_max", name: "max temp", unit: "°" },
  { src: "temp_min", name: "min temp", unit: "°" },
];

export function Summary({ weather }) {
  return (
    <div className="summary">
      <AttributeList attributes={attributes} weather={weather} />
    </div>
  );
}
