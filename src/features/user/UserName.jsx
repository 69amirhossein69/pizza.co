import { useSelector } from "react-redux";

export default function UserName() {
  const userName = useSelector((store) => store.user.userName);
  if (!userName) {
    return null;
  }

  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}
