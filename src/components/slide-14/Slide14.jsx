import React from 'react'
import '/src/assets/styles/style-slide14.css'

const Slide14 = () => {
    return (
        <>
            <div className='menu-modal'>
                <div className="d-flex">
                    <button className='ms-auto close-btn'>
                        <img src="src/assets/images/close.svg" alt="close-btn" className='w-100' />
                    </button>
                </div>
                <div className="d-block m-auto menu-box">
                    <div className="d-flex">
                        <h3>Menu</h3>
                    </div>
                    <div className="d-flex">
                        <h3>Back</h3>
                    </div>
                    <div className="d-flex">
                        <h3>Mute/Unmute</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide14