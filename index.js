const express = require("express");
const cors = require("cors"); // Import CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors({ optionsSuccessStatus: 200 })); // Some legacy browsers choke on 204

// Serve static files (if needed)
app.use(express.static("public"));

// Route for homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Route for timestamp API
app.get("/api/:date?", (req, res) => {
  let date;
  const { date: dateParam } = req.params;

  // Handle empty date parameter
  if (!dateParam) {
    date = new Date();
  } else if (/^\d+$/.test(dateParam)) {
    // Handle Unix timestamp
    date = new Date(parseInt(dateParam, 10));
  } else {
    // Handle ISO 8601 or other date formats
    date = new Date(dateParam);
  }

  // Check for invalid date
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Respond with JSON
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
