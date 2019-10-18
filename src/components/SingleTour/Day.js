import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

import '../../scss/day.scss'

const Day = ({ day, info }) => {
    const [showInfo, setInfo] = useState(false)
    const toggleInfo = () => {
        setInfo(showInfo => !showInfo)
    }

    return (
        <div className="desc-info-block">
            <div className="d-flex justify-content-between align-items-center toggler">
                <h4>{day}</h4>
                <button className="btn" onClick={toggleInfo}>
                    <FaAngleDown />
                </button>
            </div>
            {showInfo && <p className="info-p">{info}</p>}
        </div>
    )
}

export default Day
