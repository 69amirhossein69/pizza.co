import { Link } from "react-router-dom";

export default function Button({ type, children, disabled, to, onClick }) {
  const base =
    "inline-block text-sm cursor-pointer rounded-full bg-yellow-500 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";

  const style = {
    primary: base + "md:px-6 md:py-4 px-4 py-3",
    small: base + "py-2 px-4 md:px-5 md:py-2.5 text-sm",
    round: base + "py-1 px-2.5 md:px-3.5 md:py-2 text-xs",
    secondary:
      "inline-block text-sm cursor-pointer md:px-6 md:py-3.5 px-4 py-2.5 rounded-full border-2  border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:text-stone-800 hover:bg-stone-400 focus:bg-yellow-400 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ",
  };
  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={style[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}
