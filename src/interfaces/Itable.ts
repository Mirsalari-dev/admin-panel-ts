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

export type complex =
  | ItopCustomers
  | TlatestTransactions

export interface Itable {
  headData: string[];
  bodyData: (
    | ItopCustomers
    | TlatestTransactions
  )[];
}
