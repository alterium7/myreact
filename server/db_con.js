import { createConnection } from 'mysql';

const mydb = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"projectdivide" 
})

export default mydb;