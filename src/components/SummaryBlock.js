import React, {Component} from 'react'

// Components
import Toggle from './elements/Toggle'

// Styles
import './SummaryBlock.css'

// Images
import perfumeImage from '../assets/images/perfume.png'

class SummaryBlock extends Component {
    state = {
        credit: true
    }

    handleCheckboxChange = () => {
        this.setState(prevState => {
            return {
                credit: !prevState.credit
            }
        })
    }

    render() {
        return (
            <div className="SummaryBlock">
                <img src={perfumeImage} className="summary__image" alt="Perfume"/>
                <hr className="splitter"/>
                <div className="summary__list">
                    <div className="summary__row">
                        <span>Monthly subscription</span>
                        <span>$14.95</span>
                    </div>
                    <div className="summary__row">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                    <div className="summary__row">
                        <span>Tax</span>
                        <span>$2.35</span>
                    </div>
                    <div className="summary__row">
                        <span>Discount</span>
                        <span className="text-primary">-$5</span>
                    </div>
                    <div className="summary__row">
                        <span>Credit (Balance $100)</span>
                        <span>
                        <span>$50</span>
                        <Toggle onChange={this.handleCheckboxChange} checked={this.state.credit}>
                            <span className="summary__checkbox"/>
                        </Toggle>
                    </span>
                    </div>
                </div>
                <hr className="splitter"/>
                <div className="summary__total">
                    <span>TOTAL</span>
                    <span>$25.00</span>
                </div>
                <div className="summary__text">Have a <span className="summary__link">coupon code?</span></div>
            </div>
        )
    }
}

export default SummaryBlock
