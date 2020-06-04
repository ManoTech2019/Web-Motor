import React, { Component } from 'react';
import './App.css';
import './webmotors.svg';


class App extends Component{
  constructor(){
  super();
  this.state = {
    Onde:'',
    Raio:'',
    Faixa_de_Preço: '',
    Ano_Desejado:'',
  };


}

handleManualReset = (event) => {
  event.preventDefault()
  this.form.reset()
}

handleReset = ({ fields, form }) => {
  this.setState({ Onde: '' })
}

  render() {

    return(
<div id= "enviar-dados">
        <header class="Header">
        <img src= "webmotors.svg" className="webmotors" alt="web"></img>
        <nav className="nav_tabs">
          <ul>
            <li>
            <input type="radio" name="tabs" class="rd_tabs" id="tab1" checked/>
            <label for="tab1" className="lab"><img src="car.svg" id="car-icon" alt="carro"/><p>Comprar</p><h2 className="try">Carros</h2></label>
            <div class="content"></div>
            </li>
            <li>
            <input type="radio" name="tabs" class="rd_tabs" id="tab2"/>
            <label for="tab2" className="lab"><img src="moto.svg" id="moto-icon" alt="moto"/><p>Comprar</p><h2 className="out">Motos</h2></label>
            <div class="content"></div>
            </li>
          </ul>
        </nav>
        <a id="vende" href="https://bit.ly/3cclpQr"><p className="source">Vender meu carro</p></a>
        </header>
<div id= "container">
  <div class="row">
        <form id="cadastro" ref={form => this.form = form}
        onReset={this.handleReset} method="get">
        <div class="column-6 column label">
        <label class="conteiner">Novos
          <input
            type="checkbox"
            checked={this.state.isGoing} onChange={this.handleInputChange}/>
            <span className="check"></span>
        </label>
        <label class="conteiner"> Usados
          <input
            type="checkbox"
            checked={this.state.isGoing} onChange={this.handleInputChange}/>
            <span className="check"></span>
        </label>
        </div>
        <div className="column-9 column label">
        <label htmlFor="txt-local">
        <input type="search" id="texto" list="historico" placeholder="Onde:" size="2"></input>
                <datalist id="historico">
            <option value ="Acre - AC"></option>
            <option value ="Alagoas- AL"></option>
            <option value ="Amapá - AP"></option>
            <option value ="Bahia- AM"></option>
            <option value ="Ceará- CE"></option>
            <option value ="Distrito Federal - DF"></option>
            <option value ="Espirito Santo - ES"></option>
            <option value ="Goiás - GO"></option>
            <option value ="Maranhão- MA"></option>
            <option value ="Mato Grosso - MT"></option>
            <option value ="Mato Grosso do Sul - MS"></option>
            <option value ="Pará - PA"></option>
            <option value ="Paraíba- PB"></option>
            <option value ="Paraná - PR"></option>
            <option value ="Pernambuco - PE"></option>
            <option value ="Piauí - PI"></option>
            <option value ="Rio de Janeiro - RJ"></option>
            <option value ="Rio Grande do Norte - RN"></option>
            <option value ="Rio Grande do Sul - RS"></option>
            <option value ="Rondônia - RO"></option>
            <option value ="Roraima - RR"></option>
            <option value ="Santa Catarina - SC"></option>
            <option value ="São Paulo - SP"></option>
            <option value ="Sergipe - SE"></option>
            <option value ="Tocantins- TO"></option>
        </datalist>
        </label>
        </div>
        <div className="column-9 column input">
        <label htmlFor="txt-raio">
        <input type="search" id="raio" list="kilometragem" placeholder="Raio:" size="2"></input>
        <datalist id="kilometragem">
          <option>0 Km</option>
          <option>5 Km</option>
          <option>10 Km</option>
          <option>15 Km</option>
          <option>20 Km</option>
          <option>25 Km</option>
          <option>30 Km</option>
          <option>35 Km</option>
          <option>40 Km</option>
          <option>45 Km</option>
          <option>50 Km</option>
          <option>55 Km</option>
          <option>60 Km</option>
          <option>65 Km</option>
          <option>70 Km</option>
          <option>75 Km</option>
          <option>80 Km</option>
          <option>85 Km</option>
          <option>90 Km</option>
          <option>95 Km</option>
          <option>100 Km</option>
        </datalist>
        </label>
        </div>
        <div className="column-9 column input">
        <label htmlFor="txt-ano">
        <input type="search" id="ano" list="anual" placeholder="Ano Desejado:" size="2"></input>
            <datalist id="anual">
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
            <option>1995</option>
            <option>1994</option>
            <option>1993</option>
            <option>1992</option>
            <option>1991</option>
            <option>1990</option>
            <option>1989</option>
            <option>1988</option>
            <option>1987</option>
            <option>1986</option>
            <option>1985</option>
            <option>1984</option>
            <option>1983</option>
            <option>1982</option>
            <option>1981</option>
            <option>1980</option>
            <option>1979</option>
            <option>1978</option>
            <option>1977</option>
            <option>1976</option>
            <option>1975</option>
            <option>1974</option>
            <option>1973</option>
            <option>1972</option>
            <option>1971</option>
            <option>1970</option>
          </datalist>
        </label>
        </div>
        <div className="column-9 column input">
        <label htmlFor="txt-preco">
        <input type="search" id="preco" list="valor" placeholder="Faixa de Preço" size="2"></input>
        <datalist id="valor">
          <option>R$ 5.000 até R$ 10.000</option>
          <option>R$ 11.000 até R$ 20.000</option>
          <option>R$ 21.000 até R$ 30.000</option>
          <option>R$ 31.000 até R$ 40.000</option>
          <option>R$ 41.000 até R$ 50.000</option>
          <option>R$ 51.000 até R$ 60.000</option>
          <option>R$ 61.000 até R$ 70.000</option>
          <option>R$ 71.000 até R$ 80.000</option>
          <option>R$ 81.000 até R$ 90.000</option>
          <option>R$ 91.000 até R$ 100.000</option>
          <option>R$ 101.000 até 200.000</option>
          <option>R$ 201.000 até 300.000 </option>
          <option>R$ 301.000 até 400.000</option>
          <option>R$ 401.000 até 500.000</option>
          <option>R$ 501.000 até 600.000</option>
          <option>R$ 601.000 até 700.000</option>
          <option>R$ 701.000 até 800.000</option>
          <option>R$ 801.000 até 900.000</option>
          <option>R$ 901.000 até 1.000.000</option>
          <option>Acima de R$ 1.000.000</option>
        </datalist>
        </label>
        </div>
        <div className="column-3 column input">
        <label htmlFor="txt-marca">
        <input type="search" id="marca" list="make" placeholder="Marca:"></input>
      <datalist id="make">
          <option>Chevrolet</option>
          <option>Honda</option>
          <option>Ford</option>
      </datalist>
        </label>
        </div>
        <div className="column-3 column input">
        <label htmlFor="txt-modelo">
        <input type="search" id="modelo" list="model" placeholder="Modelo:"></input>
        <datalist id="model">
          <option>Agile</option>
          <option>Astra</option>
          <option>Onix</option>
          <option>City</option>
          <option>CRV</option>
          <option>Fit</option>
          <option>Ecosport</option>
          <option>Fussion</option>
        </datalist>
        </label>
        </div>
        <div className="column-3 column input">
        <label htmlFor="txt-versao">
        <input type="search" id="versão" list="version" placeholder="Versão:"></input>
        <datalist id="version">
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>1.5 LX 16V FLEX 4P MANUAL</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>1.5 LX 16V FLEX 4P MANUAL</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>1.5 LX 16V FLEX 4P MANUAL</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>1.5 LX 16V FLEX 4P MANUAL</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>1.5 LX 16V FLEX 4P MANUAL</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>1.5 LX 16V FLEX 4P MANUAL</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL</option>
        <option>1.5 DX 16V FLEX 4P AUTOMÁTICO</option>
        <option>1.5 LX 16V FLEX 4P MANUAL</option>
        <option>2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO</option>
        <option>1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO</option>
        <option>1.0 MPI EL 8V FLEX 4P MANUAL"</option>
        </datalist>
        </label>
        </div>
        </form>
        </div>
        </div>
        <form className="botao">
        <button id="oferta" onClick={this.onSubmit} required="required">Ver Ofertas</button>
      <button id="filtro" onClick={this.handleManualReset} required="required">Limpar filtos</button>
      <a class="busca" href="https://bit.ly/3c2p0k8">> Busca Avançada</a>
        </form>
  </div>
    );
  }
}

export default App;