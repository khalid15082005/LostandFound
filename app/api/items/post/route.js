import connectDB from '@/lib/mongodb';
import Item from '@/models/Item';

export async function POST(req) {
  await connectDB();
  const { title, description, category, contact } = await req.json();

  const newItem = new Item({ title, description, category, contact });
  await newItem.save();

  return new Response(JSON.stringify({ message: 'Item posted successfully' }), { status: 201 });
}
