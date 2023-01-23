import HeadConfig from "../../hooks/HeadConfig";
import contato from "../../../public/contato.jpg";
import styles from "./styles.module.scss";
export function About() {
  return (
    <>
      <HeadConfig
        title="Ranek | Sobre"
        description="pagina com informação da loja Ranek"
      />

      <section className="container animeLeft content">
        <div className={styles.sobre}>
          <img src={contato} alt="a woman " />
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cupiditate dolorem unde aliquid temporibus ipsum animi
              beatae quis consequatur, illum vel nobis exercitationem quos?
              Dignissimos quas in corrupti excepturi repellat.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
              voluptatem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
