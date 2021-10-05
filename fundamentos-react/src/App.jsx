import React from "react";
import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from "./components/Repeticao";

export default (props) => (
    <div className="App">
        <Card titulo="#4 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#3 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#2 - Componente com Parametro">
            <ComParametro titulo="Esse é o Titulo" subtitulo="Esse é o Subtitulo" />
        </Card>
        <Card titulo="#1 - Primeiro Componente">
            <Primeiro />
        </Card>        
    </div>
);