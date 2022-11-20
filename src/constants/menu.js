import {
  Home,
  Box,
  DollarSign,
  Tag,
  UserPlus,
  Chrome,
  LogIn,
} from "react-feather";

export const MENUITEMS = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: Home,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    title: "商品管理",
    icon: Box,
    type: "sub",
    active: false,
    children: [
      {
        title: "Physical",
        type: "sub",
        active: false,
        children: [
          {
            path: "/products/physical/category",
            title: "商品清單",
            type: "link",
          },
          {
            path: "/products/physical/product-list",
            title: "商城預覽",
            type: "link",
          },
          {
            path: "/products/physical/product-detail",
            title: "商品預覽",
            type: "link",
          },
          {
            path: "/products/physical/add-product",
            title: "新增商品",
            type: "link",
          },
          {
            path: "/products/physical/product-type",
            title: "商品類別",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    title: "訂單管理",
    icon: DollarSign,
    type: "sub",
    active: false,
    children: [{ path: "/sales/orders", title: "sales", type: "link" }],
  },
  {
    title: "折扣券",
    icon: Tag,
    type: "sub",
    active: false,
    children: [
      { path: "/coupons/list-coupons", title: "List Coupons", type: "link" },
      {
        path: "/coupons/create-coupons",
        title: "Create Coupons",
        type: "link",
      },
    ],
  },
  {
    title: "後台權限設定",
    icon: UserPlus,
    type: "sub",
    active: false,
    children: [
      { path: "/users/list-user", title: "User List", type: "link" },
      { path: "/users/create-user", title: "Create User", type: "link" },
    ],
  },
  {
    title: "到店取貨系統",
    icon: DollarSign,
    type: "sub",
    active: false,
    children: [
      { path: "/get-product/get-product", title: "到店取貨系統", type: "link" },
    ],
  },
  {
    title: "贈品後台",
    icon: DollarSign,
    type: "sub",
    active: false,
    children: [{ path: "/giveaway/giveaway", title: "贈品後台", type: "link" }],
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: LogIn,
    type: "link",
    active: false,
  },
];
