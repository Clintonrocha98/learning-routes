import HeadConfig from "../../hooks/HeadConfig";
import background from "../../../public/background.jpg";
import styles from "./styles.module.scss";

export function HomePage() {
  // fetch("https://fakeface.rest/face/json")
  //   .then((r) => r.json())
  //   .then((r) => console.log(r.image_url));
  return (
    <>
      <HeadConfig title="Ranek | Home" description="inicial page Ranek" />
      <section className="container animeLeft">
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
