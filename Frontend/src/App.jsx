import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setproducts] = useState([]);
  const [errors, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        seterror(false);
        setloading(true);
        const responce = await axios.get("/api/products", {
          params: { q: search },
          signal: controller.signal,
        });
        console.log(responce.data);
        setproducts(responce.data);
        setloading(false);
      } catch (error) {
        console.log(error);
        seterror(true);
        setloading(false);
      }
    })();
  }, [search]);

  if (errors) {
    return <h1>Something went wrong</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  function handlesubmit(e) {
    e.preventDefault();
  }

  console.log(products);

  console.log(search);

  return (
    <>
      <h1>Advanced React Search Operation</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search the Products Here"
        />
      </form>

      <h1>Number of Products are:{products.length}</h1>
      {products.map((product) => (
        <h1 key={product.id}>
          {product.name} : ${product.price}
        </h1>
      ))}
    </>
  );
}

export default App;
