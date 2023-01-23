import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import HeadConfig from "../../hooks/HeadConfig";
import styles from "./styles.module.scss";
import { Coments } from "../coments";

export function Product() {
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        await fetch(url)
          .then((response) => response.json())
          .then((response) => setProduto(response));
      } catch (erro) {
        setError("deu error");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  function LoadingSection() {
    return (
      <>
        <section className="container">
          <p>Loading...</p>
        </section>
      </>
    );
  }
  if (loading) return <LoadingSection />;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <>
      <HeadConfig
        title={`Ranek | ${produto.nome}`}
        description={`${produto.nome} info page`}
      />
      <section>
        <div className="container animeLeft">
          <div className={styles.route}>
            <p>Home &#62; Products &#62; {produto.nome}</p>
          </div>
          <div className={styles.product}>
            <div className={styles.previw}>
              {produto.fotos.map((foto) => (
                <img src={foto.src} key={foto.src} alt={foto.titulo} />
              ))}
            </div>
            <div className={styles.description}>
              <h1>{produto.nome}</h1>
              <p>{produto.descricao}</p>
              <span>R${produto.preco}</span>
              <div className={styles.warrapButton}>
                <button>Buy Now</button>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <Coments />
      </section>
    </>
  );
}
