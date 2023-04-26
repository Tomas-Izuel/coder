import { currentUserDto } from "../DTOs/user.dto.js";
import usersDao from "../persistencia/DAOs/users.dao.js";
import { hashPassword, comparePasswords, generateToken } from "../utils.js";

export const register = async (user) => {
  try {
    const isUsernameExists = await usersDao.getByEmail(user.email);
    if (!isUsernameExists) {
      user.password = await hashPassword(user.password);
      return usersDao.create(user);
    } else {
      throw new Error("Username already exists");
    }
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const user = await usersDao.getByEmail(email);
    if (user) {
      const isPasswordValid = await comparePasswords(password, user.password);
      if (isPasswordValid) {
        return generateToken(user);
      } else {
        throw new Error("Invalid password");
      }
    } else {
      throw new Error("Invalid username");
    }
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (id) => {
  try {
    const user = await usersDao.findById(id);
    return currentUserDto(user);
  } catch (error) {
    throw error;
  }
};
