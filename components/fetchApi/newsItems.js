import React from 'react'

function NewsItems(props) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={!props.imgUrl? "https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/03/Shiba-Inu-Price-Down-by-8-and-Bitgert-Price-up-by-87.jpg":props.imgUrl} className="card-img-top" alt="Missing Image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.myDesc}</p>
                        <a href={props.readLink} rel="noreferrer" className="btn btn-sm btn-primary" target="_blank">Read More</a>
                    </div>
            </div>
        </div>
    )
}

export default NewsItems
