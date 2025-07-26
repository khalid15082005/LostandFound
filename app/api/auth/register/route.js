import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
  }

  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();

  return new Response(JSON.stringify({ message: 'Registered successfully' }), { status: 201 });
}
