import NetFlexData from "./NetFlexData";
import Card from "./Card";



const Netflix = () => {
    return <Card
        imgSrc={NetFlexData[3].imgSrc}
        title={NetFlexData[3].title}
        seriesName={NetFlexData[3].seriesName}
        link={NetFlexData[3].link}
    ></Card>
}

export default Netflix;