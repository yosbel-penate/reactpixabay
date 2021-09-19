import React, { Component } from 'react'

export default class Search extends Component {
    
    SearchRef=React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();
        this.props.dataSearch(this.SearchRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.SearchRef} type="text" className="form-control
                        form-control-lg" placeholder="Search you image. Example: futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" />
                    </div>
                </div>
            </form>
        )
    }
}
