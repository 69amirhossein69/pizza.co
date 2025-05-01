import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { increaseITemQuantity,decreaseItemQuantity, getCurrentQuantityById } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const correntQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      <span className="text-sm  font-medium">{correntQuantity}</span>
      <Button
        onClick={() => dispatch(increaseITemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}
