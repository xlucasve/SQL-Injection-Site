const sqlConfig = {
  user: "sa",
  password: "SuperAdmin#",
  database: "Injection",
  server: "127.0.0.1",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};
