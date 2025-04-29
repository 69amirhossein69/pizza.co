import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem({ pizzaId }));
  }
  return (
    <Button onClick={() => handleDeleteItem(pizzaId)} type="small">
      Delete
    </Button>
  );
}
