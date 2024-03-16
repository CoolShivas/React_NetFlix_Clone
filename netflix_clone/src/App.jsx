import Amazon from "./components/Amazon";
import Netflix from "./components/Netflix";
import ErrorMsg from "./ErrorMsg";
import NetFlexData from "./components/NetFlexData";
import Card from "./components/Card";




// const favProg = "amazon";
const favProg = "netflix";
// const favProg = "altbalaji";

// const Favourite = () => {
//     if (favProg === "amazon") {
//         return <Card
//             imgSrc={NetFlexData[3].imgSrc}
//             title={NetFlexData[3].title}
//             seriesName={NetFlexData[3].seriesName}
//             link={NetFlexData[3].link}
//         ></Card>
//     } else if (favProg === "netflix") {
//         return <Card
//             imgSrc={NetFlexData[4].imgSrc}
//             title={NetFlexData[4].title}
//             seriesName={NetFlexData[4].seriesName}
//             link={NetFlexData[4].link}
//         ></Card>
//     }
//     else {
//         return <ErrorMsg />
//     }
// }


const Favourite = () => {
    if (favProg === "amazon") {
        return <Netflix />
    }
    else if (favProg === "netflix") {
        return <Amazon />
    }
    else {
        return <ErrorMsg />
    }
}


function App() {
    return <>
        <h1 className='heading_style'> List of top 5 netflix series. </h1>

        {/* {NetFlexData.map((val, index) => {
            return <Card
                key={index}
                imgSrc={val.imgSrc}
                title={val.title}
                seriesName={val.seriesName}
                link={val.link}
            />
        })} */}

        <Favourite></Favourite>

    </>
}

export default App;