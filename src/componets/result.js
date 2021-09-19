import React, { Component } from 'react'
import Image from './image'
import Pagination from './pagination'

export default class Result extends Component {

    showImages=()=>{
        const images=this.props.images;
        if (images.length === 0) return null;

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map(imagen=>(
                        <Image 
                            key={imagen.id}
                            image={imagen}
                        />
                    ))}
                </div>
                <div className="d-flex justify-content-between row">
                    <Pagination
                        previousPage={this.props.previousPage}
                        nextPage={this.props.nextPage}
                    />
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>{this.showImages()}</React.Fragment>
        )
    }
}
