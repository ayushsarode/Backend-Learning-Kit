const express = require("express")
const users = require("./MOCK_DATA.json")


const app = express()
const PORT = 3000;


app.get("/users", (req, res) => {
    return res.json(users);
})

// app.get("/users", (req, res) => {
//     const html = `<ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`
//     </ul >`;
//     res.send(html);
// });


// app.get("/users", (req, res) => {
//     const html = `<ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
//     </ul>`;
//     res.send(html);
// });

app.get("/users/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            throw new Error('User not found')
        }

        return res.json(user);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }

});

app.post("/users", (req, res) => {
    return res.json({ status: "pending" });
})

app.put("/users/:id", (req, res) => {
    return res.json({ status: "pending" });
})

app.delete("/users/:id", (req, res) => {
    return res.json({ status: "pending" });
})


app.listen(PORT, () => {
    console.log(`Server is running ${PORT} `);
})
