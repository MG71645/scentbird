import React, {Component} from 'react'

// Components
import Field from './elements/Field'
import Toggle from './elements/Toggle'
import Radio from './elements/Radio'
import CardNumber from './elements/CardNumber'
import CardMonth from './elements/CardMonth'
import CardYear from './elements/CardYear'
import CardCode from './elements/CardCode'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Styles
import './SubscriptionForm.css'

// Images
import safetyImage from '../assets/images/safety.svg'
import paymentsImage from '../assets/images/payments.png'
import arrowImage from '../assets/images/arrow.svg'
import womenImage from '../assets/images/women.svg'
import menImage from '../assets/images/men.svg'

class SubscriptionForm extends Component {
    state = {
        billingAddress: false,
        form: {
            cardMonth: '',
            cardYear: ''
        },
        errors: {
            cardMonth: '',
            cardYear: ''
        }
    }

    toggleAddress = () => {
        this.setState(prevState => {
            return {billingAddress: !prevState.billingAddress}
        })
    }

    checkExpiration = () => {
        const cardMonth = this.state.form.cardMonth
        const cardYear = this.state.form.cardYear

        if (cardMonth && cardYear) {
            const year = (new Date()).getFullYear()
            const month = (new Date()).getMonth()
            let error = (+cardYear === year && +cardMonth <= month) ? 'expired' : ''

            this.setState(prevState => {
                return {
                    errors: {
                        ...prevState.errors,
                        cardMonth: error
                    }
                }
            })
        }
    }

    handleCardMonthChange = field => {
        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    cardMonth: field.value
                },
                errors: {
                    ...prevState.errors,
                    cardMonth: field.value ? '' : 'This field is required'
                }
            }
        }, () => this.checkExpiration())
    }

    handleCardYearChange = field => {
        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    cardYear: field.value
                },
                errors: {
                    ...prevState.errors,
                    cardYear: field.value ? '' : 'This field is required'
                }
            }
        }, () => this.checkExpiration())
    }

    render() {
        return (
            <form className="SubscriptionForm">
                <div>
                    <h3 className="h3">Choose your subscription type</h3>
                    <div className="subscription__radio">
                        <Radio>
                            <div className="subscription__option" value="women">
                                <div className="subscription__image">
                                    <img src={womenImage} alt=""/>
                                </div>
                                <div className="subscription__title">For women</div>
                            </div>
                            <div className="subscription__option" value="men">
                                <div className="subscription__image">
                                    <img src={menImage} alt=""/>
                                </div>
                                <div className="subscription__title">For men</div>
                            </div>
                        </Radio>
                    </div>
                </div>
                <div>
                    <h3 className="h3">Create account</h3>
                    <div className="fields-grid">
                        <Field type="email" className="col-6" placeholder="Email address" required/>
                        <Field type="password" className="col-6" placeholder="Password" minLength="10" required/>
                    </div>
                </div>
                <div>
                    <h3 className="h3">Shipping address</h3>
                    <div className="fields-grid">
                        <Field type="text" className="col-6" placeholder="First name" required/>
                        <Field type="text" className="col-6" placeholder="Last name" required/>
                        <Field type="text" className="col-8" placeholder="Street address" required/>
                        <Field type="text" className="col-4" placeholder="Apt/Suite (Optional)"/>
                        <Field type="text" className="col-4" value="100095"/>
                        <Field type="text" className="col-4" value="NEW YORK"/>
                        <Field type="text" className="col-4" value="NEW YORK"/>
                        <Field type="text" className="col-12" value="UNITED STATES"/>
                        <div className="mobile-number col-12">
                            <Field type="phone" className="mobile-number__field" placeholder="Mobile number (Optional)"/>
                            <div className="mobile-number__description">
                                We may send you special discounts and offers
                            </div>
                        </div>
                    </div>
                    <Toggle className="address-toggle"
                            checked={!this.state.billingAddress}
                            onChange={this.toggleAddress}
                    >
                        <span className="address-checkbox"/>
                        <span className="address-toggle__text">Use this address as my billing address</span>
                    </Toggle>
                </div>
                {this.state.billingAddress ?
                    <div>
                        <h3 className="h3">Billing address</h3>
                        <div className="fields-grid">
                            <Field type="text" className="col-8" placeholder="Street address" required/>
                            <Field type="text" className="col-4" placeholder="Apt/Suite (Optional)"/>
                            <Field type="text" className="col-4" value="100095"/>
                            <Field type="text" className="col-4" value="NEW YORK"/>
                            <Field type="text" className="col-4" value="NEW YORK"/>
                            <Field type="text" className="col-12" value="UNITED STATES"/>
                        </div>
                    </div>
                : null}
                <div>
                    <h3 className="h3">Secure credit card payment</h3>
                    <div className="card">
                        <div className="card__header">
                            <div className="card__safety">
                                <img src={safetyImage} alt=""/>
                                <span className="card__encryption">128-BIT ENCRYPTION. YOU’RE SAFE</span>
                            </div>
                            <img src={paymentsImage} alt="Visa, Mastercard, Discover, American Express"/>
                        </div>
                        <div className="card__form">
                            <div className="card__front">
                                <CardNumber className="card__field-number" placeholder="Credit card number" required/>
                                <CardMonth className="card__field-month"
                                           placeholder="Month"
                                           onChange={this.handleCardMonthChange}
                                           error={this.state.errors.cardMonth}
                                           required/>
                                <CardYear className="card__field-year"
                                          placeholder="Year"
                                          onChange={this.handleCardYearChange}
                                          error={this.state.errors.cardYear}
                                          required/>
                                <div className="card__text">Exp.</div>
                            </div>
                            <div className="card__back">
                                <CardCode className="card__field-code" placeholder="Security code" required/>
                                <FontAwesomeIcon icon="question-circle"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form__buttons">
                    <button type="button" className="link back-button">Back</button>
                    <button type="submit" className="button-primary buy-button">
                        <span className="buy-button__text">Buy now</span>
                        <img src={arrowImage} className="buy-button__icon" alt=""/>
                    </button>
                </div>
            </form>
        )
    }
}

export default SubscriptionForm
