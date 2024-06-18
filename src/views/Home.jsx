// import '../assets/styles/style-Home.css'
import Slide1 from '../components/slide-1/Slide1';
import Slide14 from '../components/slide-14/Slide14';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <h1 className="text-center">Taking  A Bath</h1>
                    <div className="play-area">
                        {/* <Slide1 /> */}
                        <Slide14 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
