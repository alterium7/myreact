import express, { json } from 'express';
import mydb from '../server/db_con.js';
import cors from 'cors';

const app = express();
const PORT = 1332;
app.use(cors());
app.use(json())

mydb.connect()

// Route to get all posts
app.get("/api/get", (req,res)=>{
    mydb.query("SELECT * FROM projectdivide_characters", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});


app.get("/api/getallsupports", (req,res)=>{
    mydb.query("SELECT * FROM projectdivide_characters WHERE char_role = 'Support' ", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });

});

app.listen(PORT, ()=>{ console.log(`Server is running on ＄{PORT}`) })