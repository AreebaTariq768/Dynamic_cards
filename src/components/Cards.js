import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Cards = ({img,name,para,last}) => {
  return (
    <>
     <div className="card">
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{para}</p>
    <p className="card-text"><small className="text-body-secondary">{last}</small></p>
  </div>
</div>

  </>
    
  )
}

export default Cards
