import React, { Component } from 'react';
import Search from './componets/search';
import Result from './componets/result';
import logo from './assets/logo-fondo-azul-transp.png';

export class App extends Component {
  state={
    terms:'',
    images:[],
    page:''
  }
  scroll=()=>{
    const element=document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }
  consultApi=()=>{
    const url=`https://pixabay.com/api/?key=23459354-3cb2e5cd9a04660b7843329b4&q=${this.state.terms}&per_page=30&page=${this.state.page}`
    fetch(url)
    .then(response=>response.json())
    .then(resultSearch=>this.setState({images:resultSearch.hits}));
  }
  dataSearch= term =>{
    this.setState({
      terms:term,
      page:1
    },
      ()=>{
        this.consultApi()
      }
    )
  }
  previousPage=()=>{
    let actualPage=this.state.page;
    actualPage--;
    if(actualPage===0) return null;
    this.setState(
      {page:actualPage},
      ()=>{
        this.consultApi();
        this.scroll();
      }
      );
  }
  nextPage=()=>{
    let actualPage=this.state.page;
    actualPage++;
    this.setState(
        {page:actualPage},
        ()=>{
          this.consultApi();
          this.scroll();
        }
      );
  }
  render() {
    return (
      <React.Fragment>
        <div className="app">
          <div className='row'>
            <div className="container fixed-top">
              <div className='row' style={{backgroundColor: '#00243D'}}>
                <div className="col-sm"></div>
                  <div className="col-sm-3 align-content-end">
                      <img src={logo} alt="loading..." class="w-50 m-2"/>
                  </div>
                  <div className="col-sm-8">
                      <div className='lead'>
                        <Search dataSearch={this.dataSearch}/>
                      </div>
                  </div>
                  <div className="col-sm"></div>
                </div>
            </div>
            <div className="form-group justify-content-center">
              <Result
                images={this.state.images}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App