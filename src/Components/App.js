import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { getWeather } from "./helper";
import { Summary } from "./Summary";
import { Weather } from "./Weather";
import { Header } from "./Header";
import { Search } from "./Search";
import { Date } from "./Date";
import { Main } from "./Main";

export default function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [weather, setWeather] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          toast.info(
            `Fetching weather for ${query.q ? query.q : "current location."}`
          );

          const data = await getWeather({ ...query });

          if (!data) throw new Error("City not found!");

          toast.success(
            `Successfully fetched weather data for ${
              data.name ? data.name : "delhi"
            }`
          );
          setWeather(data);
          setQuery({ q: "" });
        } catch (err) {
          toast.error(err.message);
        }
      }

      fetchData();
    },
    [query]
  );

  return (
    <div className="app">
      <Header image={"logo"}>
        <h1>Weatherly</h1>
      </Header>
      <Search query={query.q} onSearch={setQuery} />
      <Main>
        {weather && (
          <>
            <Date
              date={weather.dt}
              city={weather.name}
              country={weather.country}
            />
            <Weather weather={weather} />
            <Header>
              <h3>Additional Details</h3>
            </Header>
            <Summary weather={weather} />
          </>
        )}
      </Main>
      <ToastContainer autoClose={1000} theme="colored" newestOnTop={true} />
    </div>
  );
}
