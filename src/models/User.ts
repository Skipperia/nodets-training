import { Schema, model } from 'mongoose';

//basic structure for a monogo model, this is instead of a repostiory

interface IUser {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
