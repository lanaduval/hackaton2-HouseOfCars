const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(company) {
    return this.connection.query(
      `insert into ${this.table} (name, email, password, siret) values (?, ?, ?, ?)`,
      [company.name, company.email, company.hashedPassword, company.siret]
    );
  }

  update(company) {
    return this.connection.query(
      `update ${this.table} set name= ?, email= ?, password= ?, siret = ? where id = ?`,
      [
        company.name,
        company.email,
        company.hashedPassword,
        company.siret,
        company.id,
      ]
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = CompanyManager;
