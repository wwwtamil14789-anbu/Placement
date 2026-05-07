const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tamildb"
});

db.connect((err) => {
    if (err) {
        console.log("DB Connection Failed:", err);
    } else {
        console.log("DB Connected...");
    }
});


// ================= REGISTER =================
app.post("/register", (req, res) => {

    const { username, email, password, phone_number } = req.body;

    const sql = "INSERT INTO client (Username,Email,Password,Phone_number) VALUES (?,?,?,?)";

    db.query(sql, [username, email, password, phone_number], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Registration Failed" });
        }
        else{
        res.json({ message: "User Registered Successfully" });
        }

    });

});


// ================= GET USERS =================
app.get("/users", (req, res) => {

    const sql = `
    SELECT 
    Id AS id,
    Username AS username,
    Email AS email,
    Password AS password,
    Phone_number AS phone_number
    FROM client
    `;

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error fetching users" });
        }

        res.json(result);

    });

});


// ================= UPDATE USER =================
app.put("/users/:id", (req, res) => {

    const { id } = req.params;
    const { username, email, password, phone_number } = req.body;

    const sql = `
    UPDATE users 
    SET Username=?, Email=?, Password=?, Phone_number=? 
    WHERE Id=?`;

    db.query(sql, [username, email, password, phone_number, id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating user" });
        }
        else{
        res.json({ message: "User updated successfully" });
        }
    });

});


// ================= DELETE USER =================
app.delete("/users/:id", (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM details WHERE Id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error deleting user" });
        }
        else{
        res.json({ message: "User deleted successfully" });
        }
    });

});


// ================= SERVER =================
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});