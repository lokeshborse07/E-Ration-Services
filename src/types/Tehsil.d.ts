import { ObjectId } from "mongoose";
import { Address } from "./Address";
import { FairPriceShop } from "./FPS";
import { Transaction } from "./Transaction";
import { Stock } from "./Stock";

export interface Tehsil {
  _id: ObjectId;
  taluka: string;
  pincode: string;
  taluka: string;
  tehsilUserId: string;
  address: Address;
  pincode: string;
  password: string;
  fpsShopUnder: FairPriceShop[];
  officers: User[];
  stock: Stock;
  remainingStock: Stock;
  allocatedStock: Stock[];
  transactions: Transaction[];
  allocatedStock: Stock[];
}
