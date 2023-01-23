import { NavLink } from "react-router-dom";
import IconShoppingCart from "../../assets/svg/shopping-cart";
import styles from "./styles.module.scss";
import IconPhone from "../../assets/svg/phone";
export function Header() {
  return (
    <>
      <div className={styles.containerSmallBar}>
        <div className={styles.smallBar + " container"}>
          <p className={styles.phoneIcon}>
            <IconPhone /> +55 999999-9999
          </p>
          <p>Get 50% off selected items | Buy Now</p>
          <p>Eng</p>
        </div>
      </div>
      <header>
        <nav className="container">
          <div className={styles.logo}>
            <IconShoppingCart />
            <span>Ranek</span>
          </div>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
