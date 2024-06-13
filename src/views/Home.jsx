import '../assets/styles/style-Home.css'
import image1 from '../assets/images/boy-bathtub.svg'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <h1 className="text-center">Taking  A Bath</h1>
                    <div className="play-area">
                        <div className="d-flex">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h1>Help Bala to<br />take Bath</h1>
                                    <div className="d-block">
                                        <div class="form-check mb-5">
                                            <input class="form-check-input" type="checkbox" value="" id="check" />
                                        </div>
                                        <button type="button" className='skip-btn'>Skip to<br />Checklist</button>
                                    </div>
                                </div>
                                <div className="col-lg-7 d-flex align-items-end">
                                    <div className="boy-bathtub w-100">
                                        <img src={image1} alt="boy-bathtub" className='w-100' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;