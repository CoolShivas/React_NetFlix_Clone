import NetFlexData from "./NetFlexData";
import Card from "./Card";

const Amazon = () => {
    return <Card
        imgSrc={NetFlexData[4].imgSrc}
        title={NetFlexData[4].title}
        seriesName={NetFlexData[4].seriesName}
        link={NetFlexData[4].link}
    ></Card>
}

export default Amazon;