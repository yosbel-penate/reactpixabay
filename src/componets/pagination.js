import React from 'react'

const Pagination = props => {
    return (
        <div className="px-3 py-3 d-flex justify-content-around">
            <button  onClick={props.previousPage} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={props.nextPage} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
    )
}

export default Pagination
