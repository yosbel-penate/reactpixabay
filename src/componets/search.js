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
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 p-2">
                            <input ref={this.SearchRef} type="text" className="form-control
                                form-control-lg" placeholder="Search you image. Example: futbol"/>
                        </div>
                        <div className="col-4 p-2">
                            <input type="submit" className="btn btn-lg btn-info btn-block" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
