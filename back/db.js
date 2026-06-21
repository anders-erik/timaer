
import sqlite from "node:sqlite"

const DB_PATH = process.env.DB_PATH || '../db/timaer.sqlite';
// console.log(`Using database path: ${DB_PATH}`);

class Database {

    database;
    
    constructor() {
        this.db = null
    }

    async connect() {
        this.database = new sqlite.DatabaseSync(DB_PATH);
    }
};

const DB = new Database();

export default DB;

