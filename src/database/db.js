//Importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

//Criar o obj de manipulação do BD
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

//Utilizar o obj 
db.serialize(() => {
    //Criar tabela - SQL -------------------
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    //Inserir dados -------------------
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "Papersider",
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Guilherme Gembala, Jardim America",
    //     "nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    
    //     console.log("Cadastrado com sucesso!")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData);

    //Consultar dados -------------------
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Esses são os registros:")
    //     console.log(rows)
    // })

    //Deletar dados -----------------------
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Deletado com sucesso")
    // })
});