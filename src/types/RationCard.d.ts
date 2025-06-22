import { ObjectId } from "mongoose";
import { User } from "./User";
import { Address } from "./Address";
import { FairPriceShop } from "./FPS";
import { Stock } from "./Stock";
import { Transaction } from "./Transaction";

export interface RationCard {
  _id: string;
  rationCardNumber: string;
  cardType: "White" | "Saffron" | "Yellow";
  status: "Active" | "Suspended" | "Cancelled" | "Pending";
  head: User;
  members: User[];
  address: Address;
  fpsId?: FairPriceShop;
  stock: Stock;
  transactions: Transaction[];
  monthlyStockRecords: Stock[];
  isAdminApproved: boolean;
  createdAt: Date;
}
