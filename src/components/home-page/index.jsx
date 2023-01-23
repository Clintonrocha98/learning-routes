import HeadConfig from "../../hooks/HeadConfig";
import background from "../../../public/background.jpg";
import styles from "./styles.module.scss";

export function HomePage() {
  return (
    <>
      <HeadConfig title="Ranek | Home" description="inicial page Ranek" />
      <section className="container animeLeft content">
        <div className={styles.banner}>
          <img src={background} alt="a woman shopping on her cell phone" />
          <div className={styles.infoContent}>
            <p>The best electronics you can find here</p>
            <button>Buy Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
