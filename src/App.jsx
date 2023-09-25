import { useEffect, useState } from "react";

import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [text, setText] = useState("");

  async function getData() {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();

    setData(data);
    setSearchData(data);
  }

  function search() {
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchData(newData);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    search();
  }, [text]);
  return (
    <div>
      <div className="search-wrapper">
        <div className="search">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text"
            placeholder="Search Here"
          />
        </div>
        <button type="button">Search</button>
      </div>
      <div className="outer-Body">
        <div className="body">
          {searchData.map((item, index) => {
            return <Cards name={item.name} image_url={item.image_url} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
