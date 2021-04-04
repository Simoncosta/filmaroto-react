import React from 'react';

import './erro.css';
import {Link} from 'react-router-dom';

export default function Error() {

  return (
    <div className="not-found">
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <Link to="/">Veja todos os Filmes!</Link>
    </div>
  );
}