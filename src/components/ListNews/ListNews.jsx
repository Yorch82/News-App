import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

function ListNews() {
    const { news, getNews } = useContext(GlobalContext);
    useEffect(() => {
    getNews();
  }, []);
  const noticia = news.map((noticia) => {
    return (
      <div key={noticia.id}>
        <h1>{noticia.title}</h1>
        {/* <img src={noticia.image} /> */}
      </div>
    );
  });
  return (
    <div>{noticia}</div>
  )
}

export default ListNews