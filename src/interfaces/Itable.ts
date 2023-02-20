export interface ItopCustomers extends Object {
  username: string;
  order: number;
  price: string;
}

export type TlatestTransactions = {
  orderId: string;
  customer: string;
  totalPrice: string;
  date: string;
  status: string;
};

export interface IcustomersTable {
  ID: number | string;
  userName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  totalOrders: number;
  totalSpend: string;
  location: string;
}

export interface IProductsTable {
  ID: number | string;
  pic: string;
  product: string;
  inventory: number;
  price: string;
  category: string;
}

export type TCoupons = {
  discount:  string;
  percent: string;
  expireDate: string;
  createdDate: string;
  status: string;
};

export interface IcommentsTable {
  ID: number | string;
  text: string;
  userName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  status: string;
}

export type complex =
  | ItopCustomers
  | TlatestTransactions
  | IcustomersTable
  | IProductsTable
  | TCoupons
  | IcommentsTable;

export interface Itable {
  limit?: number;
  selectedCategory?: string;
  headData: string[];
  bodyData: (
    | ItopCustomers
    | TlatestTransactions
    | IcustomersTable
    | IProductsTable
    | TCoupons
    | IcommentsTable
  )[];
}
