import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Images from "./components/Images";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (search) {
      searchImages();
    }
  }, [search, currentPage]);

  const searchImages = async () => {
    const imagesForPages = 30;
    const key = "your_api_key_here"; 

    const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesForPages}&page=${currentPage}`;

    const response = await fetch(url);
    const data = await response.json();
    const { hits, totalHits } = data;
    // calcular el total de pagina
    const calculateTotalPages = Math.ceil(totalHits / imagesForPages);
    setTotalPages(calculateTotalPages);
    setImages(hits);

    // mover pantalla hacia arriab
    const jumbotron = document.querySelector(".jumbotron");
    jumbotron.scrollIntoView({ behavior: "smooth" });
  };

  const previusPage = () => {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1;

      setCurrentPage(newCurrentPage);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      const newNextPage = currentPage + 1;
      setCurrentPage(newNextPage);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Formulario setSearch={setSearch} />
        </div>

        <div className="row justify-content-center">
          <Images images={images} />
        </div>

        <div className="mb-3 row justify-content-center">
          {currentPage > 1 && (
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={previusPage}
            >
              &laquo; Anterior
            </button>
          )}
          {currentPage !== totalPages && images.length > 0 && (
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={nextPage}
            >
              Siguiente &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
