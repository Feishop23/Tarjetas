import React from 'react'


const Card = ({userRandom, ColorRandom, clickButton}) => { 
    
const styleButtom = {
  backgroundColor: ColorRandom
}
const styleColor = {
  color: ColorRandom

}

  return (
    <article className='card' style={styleColor}>
    <h2 className='Title-card'>{userRandom.quote}</h2>
    <p className='Title-card'>{userRandom.author}</p>
    <button className='card-btn' style={styleButtom} onClick={clickButton}>&#62;</button>
  </article>
  )
}

export default Card