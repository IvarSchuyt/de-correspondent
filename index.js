import express from "express";
import fetch from "node-fetch";

// Create a new Express app
const app = express();

const collectionsJson =
  "https://raw.githubusercontent.com/IvarSchuyt/de-correspondent/main/public/course/collections.json";

// Set EJS as the template engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

// Create a route for the index page
app.get("/", (request, response) => {
  // Fetch the data from the url
  fetchJson(collectionsJson).then((data) => {
    let mainVisuals = {};
    let imageFiles = {};

    // Loop door alle included variabelen heen
    data.included.forEach((element) => {
      if (element.type == "MainVisual") {
        mainVisuals[element.id] = element.relationships.image.data.id;
      } else if (element.type == "ImageFile") {
        imageFiles[element.id] = element.attributes.sourceSet;
      }
    });
    response.render("index", {
      ...data,
      mainVisuals: mainVisuals,
      imageFiles: imageFiles,
    });
  });
});

// Definieer de route voor de pagina per show ("/collection/:slug") (dankje Stefan)
app.get("/collection/:slug", (request, response) => {
  const slug = request.params.slug;

  fetchJson(collectionsJson).then((data) => {
    const collections = data.data;
    const item = collections.find(
      (collection) => collection.attributes.slug === slug
    );

    if (item) {
      const itemId = item.id;
      const itemJsonUrl = `https://raw.githubusercontent.com/IvarSchuyt/de-correspondent/main/public/course/collection/${itemId}.json`;

      fetchJson(itemJsonUrl).then((itemData) => {
        // Fetch main visuals and image files
        var mainVisuals = {};
        var imageFiles = {};

        data.included.forEach((element) => {
          if (element.type === "MainVisual") {
            mainVisuals[element.id] = element.relationships.image.data.id;
          } else if (element.type === "ImageFile") {
            imageFiles[element.id] = element.attributes.sourceSet;
          }
        });

        fetchJson(collectionsJson).then((data) => {});

        const message = "De Correspondent - " + item.attributes.title;
        response.render("collection", {
          ...data,
          item,
          itemData,
          message,
          mainVisuals,
          imageFiles,
        });
        console.log(itemJsonUrl);
      });
    }
  });
});

// Definieer de route voor de recente afleveringen ("/recent")
app.get("/recent", (request, response) => {
  const slug = request.params.slug;

  fetchJson(collectionsJson).then((data) => {
    const collections = data.data;
    const item = collections.find(
      (collection) => collection.attributes.slug === slug
    );

    if (item) {
      const itemId = item.id;
      const itemJsonUrl = `https://raw.githubusercontent.com/IvarSchuyt/de-correspondent/main/public/course/collection.json`;

      fetchJson(itemJsonUrl).then((itemData) => {
        // Fetch main visuals and image files
        var mainVisuals = {};
        var imageFiles = {};

        data.included.forEach((element) => {
          if (element.type === "MainVisual") {
            mainVisuals[element.id] = element.relationships.image.data.id;
          } else if (element.type === "ImageFile") {
            imageFiles[element.id] = element.attributes.sourceSet;
          }
        });

        fetchJson(collectionsJson).then((data) => {});

        const message = "De Correspondent - " + item.attributes.title;
        response.render("collection", {
          ...data,
          item,
          itemData,
          message,
          mainVisuals,
          imageFiles,
        });
        console.log(itemJsonUrl);
      });
    }
  });
});

// Create a route for the more page
app.get("/more", (request, response) => {
  // Fetch the data from the url
  fetchJson(collectionsJson).then((data) => {
    response.render("more", { ...data });
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
