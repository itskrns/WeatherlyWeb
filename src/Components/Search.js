import { toast } from "react-toastify";

export function Search({ city, onCity, onSearch }) {
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
      <form onSubmit={(e) => onSearch(e, city)}>
        <input
          type="text"
          value={city}
          placeholder="Search for a city..."
          onChange={(e) => onCity(e.target.value)}
        />
      </form>

      <button onClick={handleLocation}>
        <img src="images/location.png" alt="location" />
      </button>
    </div>
  );
}
