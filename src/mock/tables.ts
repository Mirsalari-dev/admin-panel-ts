
const data = {
  topCustomers: {
    head: ["customer", "totalOrders", "totalSpending"],
    body: [
      {
        username: "john doe",
        order: 490,
        price: "$15,870",
      },
      {
        username: "frank iva",
        order: 250,
        price: "$12,251",
      },
      {
        username: "anthony baker",
        order: 120,
        price: "$10,840",
      },
      {
        username: "frank iva",
        order: 110,
        price: "$9,251",
      },
      {
        username: "anthony baker",
        order: 80,
        price: "$8,840",
      },
    ],
  },
  latestOrders: {
    header: ["orderID", "customer", "totalPrice", "date", "status"],
    body: [
      {
        orderId: "#OD1711",
        customer: "john doe",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "approved",
      },
      {
        orderId: "#OD1712",
        customer: "frank iva",
        totalPrice: "$400",
        date: "1 Jun 2022",
        status: "pending",
      },
      {
        orderId: "#OD1713",
        customer: "anthony baker",
        totalPrice: "$200",
        date: "27 Jun 2021",
        status: "approved",
      },
      {
        orderId: "#OD1712",
        customer: "frank iva",
        totalPrice: "$400",
        date: "1 Jun 2022",
        status: "rejected",
      },
      {
        orderId: "#OD1713",
        customer: "anthony baker",
        totalPrice: "$200",
        date: "27 Jun 2022",
        status: "approved",
      },
    ],
  },
};

export default data;
