import {createUser} from '../services/user.services.js';
import argon2 from 'argon2';

export const createUserController = async (req, res, next) => {
  const { name, email, password, location } = req.body;
  try {
    const hashedPassword = await argon2.hash(password);
    const user = await createUser({ name, email, password: hashedPassword, location });
    res.status(201).json({
        status: 'success',
        message: 'User created successfully',
    });
  } catch (error) {
    next(error);
  }
};
