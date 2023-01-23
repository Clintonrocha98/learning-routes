import IconFacebook from "../../assets/svg/facebook";
import IconInstagram from "../../assets/svg/instagram";
import IconTwitter from "../../assets/svg/twitter";
import IconShoppingCart from "../../assets/svg/shopping-cart";
import styles from './styles.module.scss';
export function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className={styles.icons}>
            <IconInstagram />
            <IconFacebook />
            <IconTwitter />
          </div>
          <div className={styles.infoFooter}>
            <span >
              <IconShoppingCart />
              Renek
            </span>
            <div className={styles.warrapInfo}>
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Press</li>
                <li>Work Here</li>
                <li>Legal</li>
                <li>Privacy</li>
                <li>Policy Terms of Service</li>
              </ul>
            </div>
            <div className={styles.warrapInfo}>
              <h3>Suport</h3>
              <ul>
                <li>FAQ</li>
                <li>Phone</li>
                <li>Chat</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
