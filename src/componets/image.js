import React from 'react'

export const Image = (props) => {
    const{largeImageURL, likes, previewURL, tags, views}=props.image
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card w-75 p-2">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <div class="row justify-content-center">
                        <a href={largeImageURL} rel="noreferrer" target="_blank" className="btn btn-primary btn-block">Ver imagen</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;
