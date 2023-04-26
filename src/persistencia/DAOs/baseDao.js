class baseDao {
  constructor(model) {
    this.model = model;
  }

  async create(object) {
    try {
      return await this.model.create(object);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.model.find();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async update(id, newObject) {
    try {
      const object = await this.getById(id);
      if (!object) {
        return false;
      } else {
        const data = await this.collection.findByIdAndUpdate(id, newObject);
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id) {
    try {
      return await this.model.deleteOne(id);
    } catch (error) {
      throw error;
    }
  }
}

export default baseDao;
