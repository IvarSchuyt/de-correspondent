import express from "express";

// Create a new Express app
const app = express();

const collectionsJson =
  "https://raw.githubusercontent.com/IvarSchuyt/de-correspondent/main/public/Course/collections.json";

// Set EJS as the template engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

// Create a route for the index page
app.get("/", (request, response) => {
  const message = "De Correspondent - Podcasts";

  // Fetch the data from the url
  fetchJson(collectionsJson).then((data) => {
    response.render("index", { ...data, message });
  });
});

// Set the port number and start the server
const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log(`Application available on: http://localhost:${port}`);
});

async function fetchJson(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function postJson(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
}
