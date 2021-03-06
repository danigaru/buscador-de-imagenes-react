import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ setSearch }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termino.trim()) {
      setError(true);
      return;
    }

    setError(false);
    setSearch(termino);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <Error message="Agrega un término de busqueda" />}
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca un imagen, ejemplo fútbol o programación"
            onChange={(e) => setTermino(e.target.value)}
            value={termino}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
