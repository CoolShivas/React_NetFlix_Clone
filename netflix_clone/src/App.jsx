import NetFlexData from "./components/NetFlexData";
import Card from "./components/Card";

function App() {
    return <>
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

    </>
}

export default App;