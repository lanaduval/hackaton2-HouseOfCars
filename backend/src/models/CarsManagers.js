const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "cars" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(cars) {
    return this.connection.query(
      `insert into ${this.table} (make, model, autonomy, city, miles, year, seats, available, type) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        cars.make,
        cars.model,
        cars.autonomy,
        cars.city,
        cars.miles,
        cars.year,
        cars.seats,
        cars.available,
        cars.type,
      ]
    );
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = UsersManager;
