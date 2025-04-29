import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartQuantity } from "./cartSlice";
import { getTotalCartPrice } from "./cartSlice";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);


  if (totalCartQuantity === 0) {
    return null;
  }

  
  return (
    <div className=" flex items-center justify-between bg-stone-900 p-4 text-stone-200 uppercase sm:px-6 text-sm md:text-base">
      <p className="space-x-2 font-semibold text-stone-300 sm:space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
