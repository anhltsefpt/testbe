const sqlite3 = require('sqlite3').verbose()

// open the database
async function openDb (fileUrl) {
    return new Promise((accept, reject) => {
        let db = new sqlite3.Database(`${fileUrl}`, sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                reject(err.message)
            }
            accept(db)
        })
    })
}

async function readData (db) {
    return new Promise((accept, reject) => {
        db.serialize(() => {
            db.all('SELECT * FROM test', (err, rows) => {
                if (err) {
                    reject(err.message)
                }
                accept(rows)
            })
        })
    })
}

async function closeDb (db) {
    return new Promise((accept, reject) => {
        db.close((err) => {
            if (err) {
                reject(err.message)
            }
            accept(true)
        })
    })
}

module.exports = {
    closeDb,
    openDb,
    readData
}