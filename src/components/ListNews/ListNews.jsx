import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";

function ListNews() {

    const { news, getNews } = useContext(GlobalContext);
    useEffect(() => {
    getNews();
  }, []);
  const noticia = news.map((noticia) => {
    return (
      <div key={noticia.id}>
        <article className="card shadow">
          <div>
          {noticia.media.length !== 0 ?<img src={noticia.media[0]["media-metadata"][2].url} alt="imagen"/> :null}
          </div>
          <div>
            <p><strong>{noticia.title}</strong></p>
            <p>{noticia.abstract}</p>
          <span className="boton">            
            <p>{noticia.byline}.</p>
            <a className="button-85"  href={noticia.url}>Noticia completa...</a>
            </span>
          </div>
      </article>       
      </div>
    );
  });
  return (
    <div className="container">{noticia}</div>
  )
}

export default ListNews