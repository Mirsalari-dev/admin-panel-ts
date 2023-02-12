
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
   customersHeader :[
    "ID",
    "userName",
    "email",
    "phoneNumber",
    "totalOrders",
    "totalSpending",
    "location",
    "actions",
  ],
   customers : [
    {
      ID: 0,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      userName: "Amirhossein Mirsalari",
      email: "amir.tk7@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 804,
      totalSpend: "$120.00",
      location: "UK",
    },
    {
      ID: 1,
      avatar:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 230,
      totalSpend: "$120.00",
      location: "UK",
    },
    {
      ID: 2,
      avatar:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      userName: "Kyle Simpson",
      email: "Kyle_simpson@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 120,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 3,
      avatar:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      userName: "	Maximilian Doe",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 15,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 4,
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 270,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 310,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 6,
      avatar:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 804,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 7,
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      userName: "Andrei Neagoie",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 803,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 8,
      avatar:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 110,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 9,
      avatar:
        "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 804,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 10,
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
      userName: "Jason Bourne",
      email: "test@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 460,
      totalSpend: "$260.00",
      location: "UK",
    },
  ],
};

export default data;
