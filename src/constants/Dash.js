import { Shapes,StretchHorizontal,ShoppingCart } from "lucide-react";


export const tab = [
  {
    to: "/admin",
    end: true,
    label: "Category",
    Icon: Shapes,
  },
  {
    to: "/admin/product",
    label: "Products",
    Icon: StretchHorizontal,
  },
  {
    to: "/admin/orders",
    label: "Orders",
    Icon: ShoppingCart,
  },
];

export const categories = [
  { name: "Noodles", products: 22, stock: 110 },
  { name: "Rice", products: 22, stock: 110 },
  { name: "Instant Food", products: 22, stock: 110 },
];