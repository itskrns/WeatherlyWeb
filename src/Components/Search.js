import { toast } from "react-toastify";

export function Search({ query, onSearch }) {
  function handleLocation() {
    if (navigator.geolocation) {
      toast.info(`Fetching user's current location...`);

      navigator.geolocation.getCurrentPosition((pos) => {
        toast.success(`Successfully fetched location`);
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        onSearch({ lat, lon });
      });
    }
  }

  return (
    <div className="search">
      <span>
        <input
          type="text"
          value={query}
          placeholder="Search for a city..."
          onChange={(e) => onSearch({ q: e.target.value })}
        />
      </span>

      <button onClick={handleLocation}>
        <img src="images/location.png" alt="location" />
      </button>
    </div>
  );
}
