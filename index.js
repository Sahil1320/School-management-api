const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/addSchool", (req, res) => {

  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = "INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)";

  db.query(sql, [name,address,latitude,longitude], (err,result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "School added successfully"
    });

  });

});

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI/180) *
    Math.cos(lat2 * Math.PI/180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}
app.get("/listSchools", (req, res) => {

  const { latitude, longitude } = req.query;

  if(!latitude || !longitude){
    return res.status(400).json({message:"Latitude and longitude required"});
  }

  db.query("SELECT * FROM schools", (err, schools)=>{

    if(err){
      return res.status(500).json(err);
    }

    const sortedSchools = schools.map((school)=>{

      const distance = calculateDistance(
        latitude,
        longitude,
        school.latitude,
        school.longitude
      );

      return {...school, distance};

    });

    sortedSchools.sort((a,b)=> a.distance - b.distance);

    res.json(sortedSchools);

  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});