const sidebarNav = [
  {
    link: "/",
    section: "dashboard",
    icon: "lucide:layout-dashboard",
    text: "Dashboard",
  },
  {
    link: "/shop",
    section: "shop",
    icon: "icon-park-outline:ad-product",
    text: "Shop",
    children:[{
      link: "/",
      section: "dashboard",
      icon: "lucide:layout-dashboard",
      text: "All Products",
    },{
      link: "/",
      section: "dashboard",
      icon: "lucide:layout-dashboard",
      text: "Add Product",
    },{
      link: "/",
      section: "dashboard",
      icon: "lucide:layout-dashboard",
      text: "Create discount code",
    },]
  },
  {
    link: "/customers",
    section: "customers",
    icon: "ph:users-bold",
    text: "Customers",
  },
];

export default sidebarNav;
