import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from './components/Card'
import NetFlexData from './components/NetFlexData'




// console.log(NetFlexData[0]);
// console.log(NetFlexData[0].seriesName);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <h1 className='heading_style'> List of top 5 netflix series. </h1>
//     <Card
//       imgSrc="https://wallpapercave.com/wp/wp4056410.jpg"
//       title="A Netflix  Original Series"
//       seriesName="Dark"
//       link="https://www.netflix.com/in/title/80990668?source=35"
//     />
//     <Card
//       imgSrc="https://images.justwatch.com/poster/8589251/s592.jpg"
//       title="A Netflix  Original Series"
//       seriesName="Extra Curricular"
//       link="https://www.netflix.com/in/title/80990668?source=35"
//     />
//     <Card
//       imgSrc="https://wallpapercave.com/wp/wp1917154.jpg"
//       title="A Netflix  Original Series"
//       seriesName="Stranger Things"
//       link="https://www.netflix.com/in/title/80990668?source=35"
//     />

//   </>,
// )



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <h1 className='heading_style'> List of top 5 netflix series. </h1>

//     <Card
//       imgSrc={NetFlexData[0].imgSrc}
//       title={NetFlexData[0].title}
//       seriesName={NetFlexData[0].seriesName}
//       link={NetFlexData[0].link}
//     />

//     <Card
//       imgSrc={NetFlexData[1].imgSrc}
//       title={NetFlexData[1].title}
//       seriesName={NetFlexData[1].seriesName}
//       link={NetFlexData[1].link}
//     />

//     <Card
//       imgSrc={NetFlexData[2].imgSrc}
//       title={NetFlexData[2].title}
//       seriesName={NetFlexData[2].seriesName}
//       link={NetFlexData[2].link}
//     />

//     <Card
//       imgSrc={NetFlexData[3].imgSrc}
//       title={NetFlexData[3].title}
//       seriesName={NetFlexData[3].seriesName}
//       link={NetFlexData[3].link}
//     />

//     <Card
//       imgSrc={NetFlexData[4].imgSrc}
//       title={NetFlexData[4].title}
//       seriesName={NetFlexData[4].seriesName}
//       link={NetFlexData[4].link}
//     />

//   </>,
// )




// function special(val, index) {
//   return <Card
//     key={index}
//     imgSrc={val.imgSrc}
//     title={val.title}
//     seriesName={val.seriesName}
//     link={val.link}
//   />
// }




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <h1 className='heading_style'> List of top 5 netflix series. </h1>
//     {NetFlexData.map(special)}
//   </>,
// )





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1 className='heading_style'> List of top 5 netflix series. </h1>

    {NetFlexData.map((val, index) => {
      return <Card
        key={index}
        imgSrc={val.imgSrc}
        title={val.title}
        seriesName={val.seriesName}
        link={val.link}
      />
    })}

  </>,
)

