import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className=" flex items-center justify-between bg-stone-900 p-4 text-stone-200 uppercase sm:px-6 text-sm md:text-base">
      <p className="space-x-2 font-semibold text-stone-300 sm:space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
