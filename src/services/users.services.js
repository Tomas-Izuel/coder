import usersDao from "../persistencia/DAOs/users.dao.js";

export const getUsers = async () => {
  const users = await usersDao.getAll();
  return users;
};

export const getUserById = async (id) => {
  const user = await usersDao.getById(id);
  return user;
};

export const getUserByUsername = async (username) => {
  const user = await usersDao.getByUsername(username);
  return user;
};
