import { useEffect } from "react";
import { FormPage } from "../components";

const Home = () => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=31.760182600000004&lon=35.2111464&units=imperial&appid=9c5f6ab0d19802f72a11bec902d3ad00";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log("->", data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <FormPage />;
};

export default Home;
