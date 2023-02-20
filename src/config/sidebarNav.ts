const sidebarNav = [
  {
    link: "/",
    section: "dashboard",
    icon: "lucide:layout-dashboard",
    text: "Dashboard",
  },
  {
    link: "/products",
    section: "shop",
    icon: "icon-park-outline:ad-product",
    text: "Shop",
    children:[{
      link: "/products",
      section: "products",
      icon: "lucide:layout-dashboard",
      text: "All Products",
    },{
      link: "/addproduct",
      section: "addproduct",
      icon: "lucide:layout-dashboard",
      text: "Add Product",
    },{
      link: "/discount",
      section: "discount",
      icon: "lucide:layout-dashboard",
      text: "Create discount code",
    },]
  },
  {
    link: "/comments",
    section: "Comments",
    icon: "ph:users-bold",
    text: "Comments",
  },
  {
    link: "/customers",
    section: "customers",
    icon: "ph:users-bold",
    text: "Customers",
  },
  {
    link: "/transactions",
    section: "transactions",
    icon: "lucide:layout-dashboard",
    text: "transactions",
  },
];

export default sidebarNav;
