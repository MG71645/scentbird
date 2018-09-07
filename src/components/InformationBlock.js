import React from 'react'

// Styles
import './InformationBlock.css'

// Images
import illustration from '../assets/images/illustration.svg'

const InformationBlock = () => {
    return (
        <div className="InformationBlock">
            <div className="information__text">
                You will receive an email confirmation when recipient accepts your gift.
                Scentbird ships between the 15th and the 18th of every month.
                Recipient will receive an email confirmation of shipment every month.
                Please allow 5-7 days for delivery.
            </div>
            <img src={illustration} alt=""/>
        </div>
    )
}

export default InformationBlock
