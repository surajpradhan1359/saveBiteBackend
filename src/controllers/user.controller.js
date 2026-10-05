import {createUser} from '../services/user.services.js';
import {updatePassword} from '../services/user.services.js';

export const createUserController = async (req, res, next) => {
  const { name, email, password, location } = req.body;
  try {
    const user = await createUser({ name, email, password, location });
    res.status(201).json({
        status: 'success',
        message: 'User created successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const updatePasswordController = async (req, res, next) => {
  const { password } = req.body;
  try {
    const user = await updatePassword( req.userID, password );
    res.status(200).json({
        status: 'success',
        message: 'Password updated successfully',
    });
  } catch (error) {
    next(error);
  }
}