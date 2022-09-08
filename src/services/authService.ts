import * as userService from "../services/userService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUp(email: string, password: string) {
  const passwordCrypt = bcrypt.hashSync(password, 10);
  const user = { email, password: passwordCrypt };
  const userExist = await userService.findUserByEmail(email);

  if (userExist) {
    throw { status: 409, message: "This user is already registered!" };
  }

  await userService.insertNewUser(user);

  return;
}

export async function signIn(email: string, password: string) {
  const user = await userService.findUserByEmail(email);

  if (!user) {
    throw { status: 404, message: "This user isn't registered!" };
  }

  const checkPassword = bcrypt.compareSync(password, user.password);

  if (!checkPassword) {
    throw {
      status: 401,
      message: "Unauthorized!",
    };
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);

  return token;
}
