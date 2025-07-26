import connectDB from '@/lib/mongodb';
import Item from '@/models/Item';
import jwt from 'jsonwebtoken';

export async function GET(req) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
  }

  await connectDB();
  const items = await Item.find().sort({ date: -1 });

  return new Response(JSON.stringify(items), { status: 200 });
}
