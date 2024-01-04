import { Pool } from "pg";
import { poolConnection } from "./../libs";

class UserService {
  private readonly poolConnection: Pool;

  constructor() {
    this.poolConnection = poolConnection;
    this.poolConnection.on("error", (error) =>
      console.error("Error on pool connection", error),
    );
  }

  async create(data: unknown) {
    return data;
  }

  async find() {
    const query = "SELECT * FROM tasks";
    const rta = await this.poolConnection.query(query);
    return rta.rows;
  }

  async findOne(id: number) {
    return { id };
  }

  async update(id: number, changes: unknown) {
    return {
      id,
      changes,
    };
  }

  async delete(id: number) {
    return { id };
  }
}

export { UserService };
