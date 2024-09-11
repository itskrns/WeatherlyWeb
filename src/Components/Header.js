export function Header({ image, children }) {
  return (
    <div className={"header"}>
      {image && <img src={`images/${image}.png`} alt={image} />}
      {children}
    </div>
  );
}
