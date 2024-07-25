const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON responses
app.use(express.json());

// Route for homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Route for timestamp API
app.get("/api/:date?", (req, res) => {
  let date;

  if (!req.params.date) {
    date = new Date();
  } else if (/^\d+$/.test(req.params.date)) {
    // Handle Unix timestamp
    date = new Date(parseInt(req.params.date));
  } else {
    // Handle ISO 8601 or other date formats
    date = new Date(req.params.date);
  }

  // Check for invalid date
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
