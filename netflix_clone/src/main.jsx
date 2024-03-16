import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from './components/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Card
      imgSrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix  Original Series"
      seriesName="Dark"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card
      imgSrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix  Original Series"
      seriesName="Extra Curricular"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card
      imgSrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title="A Netflix  Original Series"
      seriesName="Stranger Things"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

  </>,
)
