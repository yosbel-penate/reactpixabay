import React, { Component } from 'react'
import Search from './componets/search';

export class App extends Component {

  dataSearch= term =>{
    console.log(term);
  }

  render() {
    return (
      <div>
        <div className="app container">
          <div className='jumbotron'>
            <p className='lead text-center'>Buscador de Imágenes</p>
            <Search message={this.props.dataSearch}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
