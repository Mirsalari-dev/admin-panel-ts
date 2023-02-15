import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          AmirhosseinMirsalari: "Amirhossein Mirsalari",
          admin: "admin",
          transactions:"transactions",
          dashboard: "Dashboard",
          newMessage:"You have a new message",
          orders: "Orders",
          products: "Products",
          customers: "Customers",
          viewAllMessage:"View all message",
          analytics: "Analytics",
          discount: "Discount",
          inventory: "Inventory",
          logout: "Logout",
          login: "Login",
          summary: "Summary",
          thisMonthSales: "This month Sales",
          thisMonthOrders: "This month Orders",
          thisMonthRevenue: "This month Revenue",
          quickAnalysis: "Quick Analysis",
          topCustomers: "Top Customers",
          latestTransaction: "Latest Transactions",
          customer: "Customer",
          totalSpending: "Total Spending",
          totalOrders: "Total Orders",
          orderID: "Order ID",
          shop:"Shop",
          totalPrice: "Total Price",
          date: "Date",
          addproduct:"add product",
          status: "Status",
          approved: "Approved",
          pending: "Pending",
          rejected: "Rejected",
          viewAll: "View All",
          search: "Search",
          editCustomer: "Edit Customer",
          editProduct: "Edit Product",
          AccountDetails: "Account Details",
          contacts: "Contacts",
          edit: "Edit",
          userName: "User Name",
          pass: "Password",
          phoneNumber: "Phone Number",
          email: "Email",
          address: "Address",
          upload: "Upload",
          location: "Location",
          deleteCustomer: "Delete Customer",
          modalMessage: "Are you sure about delete this?",
          delete: "Delete",
          cancel: "Cancel",
          actions: "Actions",
          category: "Category",
          all: "All",
          clothing: "Clothing",
          digital: "Digital",
          beauty: "Beauty",
          product: "Product",
          price: "Price",
          proName: "Product Name",
          milT:" (per milion Toman)",
          inventoryCount: "Inventory Count",
          loginPage: "Login Into Your Account",
          errorMessage: "Please enter 'admin' in User Name box",
          forgetPass: "Forget your password?",
          rememberMe: "Remember me",
          salesAmount: "5,340",
          orderAmount: "3000",
          revenueAmount: "2,500",
          3: "3",
          currency: "$",
          summaryOfSale: "Chart Of Sale",
          summaryOfRevenue: "Chart Of Revenue",
          summaryOfOrders: "Chart Of Order",
          Jan: "Jan",
          Feb: "Feb",
          Mar: "Mar",
          Apr: "Apr",
          May: "May",
          Jun: "Jun",
          July: "July",
          Aug: "Aug",
          Sep: "Sep",
          Oct: "Oct",
          Nov: "Nov",
          Dec: "Dec",
          backToHome: "Back to Main Page",
          notFoundMsg: "Page Not Found!",
        },
      },
      fa: {
        translation: {
          AmirhosseinMirsalari: "امیرحسین میرسالاری",
          admin: "مدیر",
          dashboard: "داشبورد",
          transactions:"تراکنش ها",
          orders: "سفارشات",
          products: "محصولات",
          customers: "مشتریان",
          analytics: "آنالیزها",
          viewAllMessage:"مشاهده همه پیام ها",

          discount: "کد تخفیف",
          inventory: "موجودی انبار",
          logout: "خروج",
          login: "ورود",
          summary: "خلاصه",
          thisMonthSales: "فروش این ماه",
          newMessage:"یک پیغام جدید دارید",
          thisMonthOrders: "سفارشات این ماه",
          thisMonthRevenue: "درآمد این ماه",
          quickAnalysis: "میزان فروش در یک نگاه",
          topCustomers: "مشتریان برتر",
          latestTransaction: "آخرین تراکنشات",
          addproduct:"افزودن محصول",
          customer: "مشتری",
          totalSpending: "کل خرج‌کرد",
          totalOrders: "کل سفارشات",
          orderID: "ID سفارش",
          shop:"فروشگاه",
          totalPrice: "هزینه کل",
          date: "تاریخ",
          status: "وضعیت",
          approved: "تأیید شده",
          milT:" (میلیون تومان)",
          pending: "در انتظار",
          rejected: "رد شده",
          viewAll: "دیدن همه",
          search: "جستجو",
          editCustomer: "ویرایش کاربر",
          editProduct: "ویرایش محصول",
          AccountDetails: "جزئیات حساب‌کاربری",
          contacts: "اطلاعات تماس",
          edit: "ویرایش",
          userName: "نام کاربری",
          pass: "رمز ورود",
          phoneNumber: "شماره تماس",
          email: "ایمیل",
          address: "آدرس",
          upload: "بارگزاری",
          location: "موقعیت مکان",
          actions: "عملیات",
          deleteCustomer: "حذف مشتری",
          modalMessage: "آیا درباره حذف   مطمئن هستید؟",
          delete: "حذف",
          cancel: "صرف‌نظر",
          category: "دسته بندی",
          all: "همه",
          clothing: "پوشاک",
          digital: "دیجیتال",
          beauty: "زیبایی",
          product: "محصول",
          price: "قیمت",
          proName: "نام محصول",
          inventoryCount: "شمارش موجودی",
          loginPage: "به حساب کاربری خود وارد شوید",
          errorMessage: "لطفاً عبارت 'admin' را در کادر نام کاربری وارد کنید.",
          forgetPass: "رمز عبورتان را فراموش کرده‌اید؟",
          rememberMe: "مرا به خاطر بسپار",
          salesAmount: "۲۴,۰۰۰,۰۰۰",
          orderAmount: "۳۰۰۰",
          3: "۳",
          revenueAmount: "۱۲,۰۰۰,۰۰۰",
          currency: "تومان",
          summaryOfSale: "نمودار فروش",
          summaryOfRevenue: "نمودار سود",
          summaryOfOrders: "نمودار سفارش",
          Jan: "دی",
          Feb: "بهمن",
          Mar: "اسفند",
          Apr: "فروردین",
          May: "اردیبهشت",
          Jun: "خرداد",
          July: "تیر",
          Aug: "مرداد",
          Sep: "شهریور",
          Oct: "مهر",
          Nov: "آبان",
          Dec: "آذر",
          backToHome: "برگشت به صفحه اصلی",
          notFoundMsg: "صفحه مورد نظر یافت نشد!",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
