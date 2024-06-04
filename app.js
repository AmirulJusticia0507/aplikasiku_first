const mysql = require('mysql');

// Buat koneksi ke database MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Ganti dengan host Anda
    user: 'root', // Ganti dengan username MySQL Anda
    password: '', // Ganti dengan password MySQL Anda
    database: 'db_superapps' // Ganti dengan nama database Anda
});

// Hubungkan ke database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

// Query untuk mengambil data pengguna dari tabel users
connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
        console.error('Error querying database: ' + error.stack);
        return;
    }
    console.log('Data Pengguna:');
    console.log(results);
});

// Tutup koneksi setelah selesai
connection.end();