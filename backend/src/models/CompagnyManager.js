const AbstractManager = require("./AbstractManager");

class CompagnyManager extends AbstractManager {
  constructor() {
    super({ table: "compagny" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(compagny) {
    return this.connection.query(
      `insert into ${this.table} (name, email, password, siret) values (?, ?, ?, ?)`,
      [compagny.name, compagny.email, compagny.hashedPassword, compagny.siret]
    );
  }

  update(compagny) {
    return this.connection.query(
      `update ${this.table} set name= ?, email= ?, password= ?, siret = ? where id = ?`,
      [
        compagny.name,
        compagny.email,
        compagny.hashedPassword,
        compagny.siret,
        compagny.id,
      ]
    );
  }
}

module.exports = CompagnyManager;
