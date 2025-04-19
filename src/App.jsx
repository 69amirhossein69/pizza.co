import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "e:/programing/Udemy - The Ultimate React Course 2024 React, Redux & More 2023-11/ultimate-react-course-main/16-fast-react-pizza/final-1-after-tailwind/src/features/order/CreateOrder";
import Order from "e:/programing/Udemy - The Ultimate React Course 2024 React, Redux & More 2023-11/ultimate-react-course-main/16-fast-react-pizza/final-1-after-tailwind/src/features/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    path: "order/:orderId",
    element: <Order />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
