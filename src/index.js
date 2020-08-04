import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import Contato from './pages/contato';
import CadastroCategoria from './pages/cadastro/categoria';


  const Pagina404 = () => (<div> Erro, Pagina 404.</div>)

ReactDOM.render(
    <BrowserRouter>
      <Switch>
          <Route path="/cadastro/video" component={CadastroVideo} />
          <Route path="/cadastro/categoria" component={CadastroCategoria} />
          <Route path="/contato" component={Contato} />
          <Route path="/" component={Home} exact />
          <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>, 
  document.getElementById('root')
);
