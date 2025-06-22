import mongoose, { Schema } from "mongoose";

const RationCardSchema = new Schema({
  rationCardNumber: {
    type: String,
    required: true,
    unique: true,
  },
  cardType: {
    type: String,
    enum: ["White", "Saffron", "Yellow"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "Suspended", "Cancelled", "Pending"],
    required: true,
    default: "Active",
  },
  head: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  taluka: {
    type: String,
    required: true,
  },
  scheme: {
    type: String,
    required: true,
    enum: ["PHH", "AAY", "APL", "BPL", "AY"],
  },
  fpsId: {
    type: Schema.Types.ObjectId,
    ref: "FairPriceShop",
  },
  stock: {
    type: Schema.Types.ObjectId,
    ref: "Stock",
    required: true,
  },
  monthlyStockRecords: [
    {
      month: String,
      year: Number,
      stockReceived: {
        type: Schema.Types.ObjectId,
        ref: "Stock",
      },
      stockUtilized: {
        type: Schema.Types.ObjectId,
        ref: "Stock",
      },
    },
  ],

  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
  isAdminApproved: {
    type: Boolean,
    default: false,
  },
});

const RationCard =
  mongoose.models.RationCard || mongoose.model("RationCard", RationCardSchema);
export default RationCard;
