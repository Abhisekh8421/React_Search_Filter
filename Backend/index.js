import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("It is working ");
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Shirts",
      price: 19.99,
      description: "This is product A, a great choice for your needs.",
    },
    {
      id: 2,
      name: "Pants",
      price: 29.99,
      description: "Product B is a high-quality option for your requirements.",
    },
    {
      id: 3,
      name: "Facewash",
      price: 12.89,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 4,
      name: "Track Pants",
      price: 13.44,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 5,
      name: "Soaps",
      price: 10.56,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 6,
      name: "Cheppals",
      price: 18.19,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 7,
      name: "Handbag",
      price: 10.0,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 8,
      name: "Hairoil",
      price: 17.33,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 9,
      name: "Powder",
      price: 1.2,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 10,
      name: "T-shirts",
      price: 16.59,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 11,
      name: "Shoes",
      price: 17.2,
      description: "Consider product C for its affordability and features.",
    },
    {
      id: 12,
      name: "Sunglasses",
      price: 10.09,
      description: "Consider product C for its affordability and features.",
    },
  ];

  const { q } = req.query;
  if (q) {
    const filter_p = products.filter((p) => p.name.toLowerCase().includes(q));
    res.send(filter_p);
  } else {
    res.send(products);
  }
});

app.listen(3000, () => {
  console.log("it is working");
});
