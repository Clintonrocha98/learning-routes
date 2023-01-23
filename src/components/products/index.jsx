import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import HeadConfig from "../../hooks/HeadConfig";

export function Products() {
  const [produtos, setProduto] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  if (produtos === null) return null;
  return (
    <>
      <HeadConfig title="Ranek | Products" description="Products page Ranek" />

      <section className="container animeLeft">
        <div className={styles.containerProducts}>
          {produtos.map((produto) => (
            <Link key={produto.id} to={`/${produto.id}`}>
              <div className={styles.card}>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                <h2>{produto.nome}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
