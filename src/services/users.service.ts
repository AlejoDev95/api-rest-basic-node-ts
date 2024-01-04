import { getConnection } from "./../libs";

class UserService {
  async create(data: unknown) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const rta = await client.query("SELECT * FROM tasks");
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
