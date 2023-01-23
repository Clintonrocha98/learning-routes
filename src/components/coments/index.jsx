import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import profile from "../../../public/profile.webp";

export function Coments() {
  const [coments, setComents] = useState([]);
  const [quantidade, setQuantidade] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((response) => setComents(response));
  }, []);
  function showMore() {
    if (quantidade >= 5) setQuantidade(quantidade + 5);
  }
  function showLess() {
    if (quantidade > 5) setQuantidade(quantidade - 5);
  }
  return (
    <>
      <section className="container animeLeft">
        <h1>feadback</h1>
        {coments.slice(0, quantidade).map((coment) => (
          <div key={coment.id} className={styles.coment + " animeLeft"}>
            <img src={profile} alt="profile img" />
            <div>
              <h2>
                {coment.name} - {coment.email}
              </h2>

              <p>{coment.body}</p>
            </div>
          </div>
        ))}
        <button onClick={showMore}> &#43; Show more</button>
        <button onClick={showLess}> &#8722; Show less</button>
      </section>
    </>
  );
}
