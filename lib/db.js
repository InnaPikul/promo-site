import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: 'local',
    password: 'pass',
    host: 'localhost',
    port: '5432',
    database: 'diploma',
  });
}

export default conn ;