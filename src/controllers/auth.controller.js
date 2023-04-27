import { register, login, getCurrentUser } from "../services/auth.services.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.status(200).cookie("token", token, { httpOnly: true }).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const registerController = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await register(user);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCurrentUserController = async (req, res) => {
  try {
    const user = await getCurrentUser();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
