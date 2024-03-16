import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


function Card() {
  return <>
    <div className='cards'>
      <div className='card'>
        <img src="" alt="Image not found" className='card__img' />
        <div className='card__info'>
          <span className='card__category'>
            A Netflix  Original Series
          </span>
          <h3 className='card__title'>  </h3>
          <a href="" target='_blank'>
            <button> Watch Now </button>
          </a>
        </div>
      </div>
    </div>
  </>
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Card
      imgSrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="Dark"
      seriesName="Dark"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card />
    <Card />
  </>,
)
