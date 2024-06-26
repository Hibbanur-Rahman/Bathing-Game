import '/src/assets/styles/style-Home.css'

function Slide1() {
    return (
        <>
            <div className="d-flex">
                <div className="row">
                    <div className="col-lg-5">
                        <h1>Help Bala to<br />take Bath</h1>
                        <div className="d-block">
                            <div className="form-check mb-5">
                                <input className="form-check-input" type="checkbox" value="" id="check" />
                            </div>
                            <button type="button" className='skip-btn'>Skip to<br />Checklist</button>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-end">
                        <div className="boy-bathtub w-100">
                            <img src="src/assets/images/boy-bathtub.svg" alt="boy-bathtub" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide1;