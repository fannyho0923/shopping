import { Box, DollarSign, Tag, UserPlus, LogIn } from "react-feather";

export const MENUITEMS = [
  {
    id: "locales.products.text",
    icon: Box,
    type: "sub",
    active: false,
    children: [
      {
        path: "/products/category",
        // title: "商品清單En",
        id: "locales.categoryEn.text",
        type: "link",
      },
      {
        path: "/products/add-product",
        // title: "新增商品",
        id: "locales.addProductEn.text",
        type: "link",
      },
      {
        path: "/products/product-type",
        // title: "商品類別",
        id: "locales.productTypeEn.text",
        type: "link",
      },
      {
        path: "/products/categoryZh",
        // title: "商品清單Zh",
        id: "locales.categoryZh.text",
        type: "link",
      },
      {
        path: "/products/add-productZh",
        // title: "新增商品",
        id: "locales.addProductZh.text",
        type: "link",
      },
      {
        path: "/products/product-typeZh",
        // title: "商品類別",
        id: "locales.productTypeZh.text",
        type: "link",
      },
    ],
  },
  {
    // title: "訂單管理",
    id: "locales.order.text",
    icon: DollarSign,
    type: "link",
    active: false,
    path: "/sales/orders",
    // children: [{ path: "/sales/orders", title: "sales", type: "link" }],
  },
  {
    // title: "折扣券",
    id: "locales.coupon.text",
    icon: Tag,
    type: "sub",
    active: false,
    children: [
      {
        path: "/coupons/list-coupons",
        id: "locales.couponList.text",
        // title: "List Coupons",
        type: "link",
      },
      {
        path: "/coupons/create-coupons",
        // title: "Create Coupons",
        id: "locales.addCoupon.text",
        type: "link",
      },
    ],
  },
  {
    id: "locales.permission.text",
    // title: "後台權限設定",
    icon: UserPlus,
    type: "sub",
    active: false,
    children: [
      {
        path: "/users/list-user",
        id: "locales.users.text",
        // title: "User List",
        type: "link",
      },
      {
        path: "/users/create-user",
        id: "locales.addUser.text",
        // title: "Create User",
        type: "link",
      },
    ],
  },
  {
    id: "locales.storePickUp.text",
    icon: DollarSign,
    active: false,
    path: "/get-product/get-product",
    // title: "到店取貨系統",
    type: "link",
  },
  {
    id: "locales.giveaway.text",
    icon: DollarSign,
    active: false,
    path: "/giveaway/giveaway",
    // title: "贈品後台",
    type: "link",
  },
  {
    id: "locales.logout.text",
    // title: "Logout",
    path: "/auth/login",
    icon: LogIn,
    type: "link",
    active: false,
  },
];
