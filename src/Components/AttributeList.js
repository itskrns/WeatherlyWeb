import { TimeFormatter } from "./helper";

export function AttributeList({ attributes, weather }) {
  return (
    <>
      {attributes.map((attr) => (
        <span key={attr.src}>
          <img src={`images/${attr.src}.png`} alt={attr.name} />
          <span>
            {attr.name}:{" "}
            {attr.unit
              ? weather[attr.src].toFixed()
              : TimeFormatter(weather[attr.src])}
            {attr.unit}
          </span>
        </span>
      ))}
    </>
  );
}
