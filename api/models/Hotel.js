import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    reqired: true,
  },
  type: {
    type: String,
    reqired: true,
  },
  city: {
    type: String,
    reqired: true,
  },
  address: {
    type: String,
    reqired: true,
  },
  distance: {
    type: String,
    reqired: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    reqired: true,
  },
  desc: {
    type: String,
    reqired: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    reqired: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema);
