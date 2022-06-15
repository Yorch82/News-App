import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";

function ListNews() {

    const { news, getNews } = useContext(GlobalContext);
    useEffect(() => {
    getNews();
  }, []);
  const noticia = news.map((noticia) => {
    // const imagen = noticia.media[0]["media-metadata"][0].url
    // console.log(noticia.media[0])
    // console.log(imagen)
    return (
      <div key={noticia.id}>
        <h1>{noticia.title}</h1>
        <p>{noticia.abstract}</p>
        <p>{noticia.byline}. Published on {noticia.published_date}</p>
        <a href={noticia.url}>Enlace a noticia</a>
        {noticia.media.length !== 0 ? <img src={noticia.media[0]["media-metadata"][2].url} alt="imagen" /> : null}
      </div>
    );
  });
  return (
    <div>{noticia}</div>
  )
}

export default ListNews