
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String, // "lost" or "found"
  contact: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
