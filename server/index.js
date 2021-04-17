const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const Redis = require("ioredis");
const mongoose = require("mongoose");

require("dotenv").config();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const dbConnDataMongo = {
  host: process.env.MONGO_HOST || "my_mongo",
  port: process.env.MONGO_PORT || 27017,
  database: process.env.MONGO_DATABASE || "weathers",
};

const dbConnDataRedis = {
  host: process.env.REDIS_HOST || "my_redis",
  port: process.env.REDIS_PORT || 6379,
};

app.get("/", (req, res) => {
  res.send({weather: "chujoza"});
});

const redis = new Redis(dbConnDataRedis);

redis.on("connect", () => {
  console.log("Connected to Redis");
});

mongoose
  .connect(
    `mongodb://${dbConnDataMongo.host}:${dbConnDataMongo.port}/${dbConnDataMongo.database}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then((response) => {
    console.log(
      `Connected to MongoDB.\nDatabase name: "${response.connections[0].name}"`
    );
  })
  .catch((error) => console.error("Error connecting to MongoDB", error));

app.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});
