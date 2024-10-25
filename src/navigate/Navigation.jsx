import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/">Про нас</Link>
      <Link to="/">Контакты</Link>
      <Link to="/">Личный кабинет</Link>
    </nav>
  );
};
