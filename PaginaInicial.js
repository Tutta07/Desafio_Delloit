import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ventas from '../assets/img/ventas.jfif';

const PaginaIncial = () => {
    return (
        <div>
            <header>
            <h1>Benvindos à Página Inicial</h1>
            <img src={ventas}/>

            </header>

            <section>
                <p>Links para a página de serviços</p>
                <a href='/src/components/Serviços.js'>lINK PARA SERVIÇO 1</a>
                <a href='/src/components/Serviços.js'>lINK PARA SERVIÇO 2</a>
                <a href='/src/components/Serviços.js'>lINK PARA SERVIÇO 3</a>
            </section>
            <section>
                <p>Links para a página de blog</p>
                <a href='/src/components/Serviços.js'>lINK PARA BLOG 1</a>
                <a href='/src/components/Serviços.js'>lINK PARA BLOG 2</a>
                <a href='/src/components/Serviços.js'>lINK PARA BLOG 3</a>
            </section>
        </div>
    )
}

export default PaginaIncial