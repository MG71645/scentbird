import React, {Component} from 'react'
import classNames from 'classnames'
import {isValidNumber} from 'libphonenumber-js'

// Components
import PhoneInput from 'react-phone-number-input/basic-input'

// Styles
import './Field.css'

// Images
import icon from '../../assets/images/input-checkmark.png'

class Field extends Component {
    state = {
        focused: false,
        value: this.props.value || '',
        error: ''
    }

    validate = () => {
        let error = ''

        if (this.state.value) {
            if (!isValidNumber(this.state.value)) {
                error = 'Not a valid number'
            }
        } else if (this.props.required) {
            error = 'This field is required'
        }

        this.setState({error})
    }

    handleFocus = () => {
        this.setState({focused: true})
    }

    handleBlur = () => {
        this.setState({focused: false})
        this.validate()
    }

    handleChange = value => {
        this.setState({
            value,
            error: ''
        })
    }

    render() {
        const className = classNames('field', this.props.className, {
            'field-empty': !this.state.value,
            'field-focused': this.state.focused,
            'field-error': this.state.error
        })

        return (
            <div className={className}>
                {this.props.placeholder ?
                    <label className="field__placeholder">{this.props.placeholder}</label>
                : null}
                <PhoneInput className="field__input"
                       value={this.state.value}
                       onFocus={this.handleFocus}
                       onBlur={this.handleBlur}
                       onChange={this.handleChange}
                />
                {this.state.value && !this.state.focused && !this.state.error ?
                    <img src={icon} className="field__icon" alt=""/>
                : null}
                {this.state.error ?
                    <div className="field__error">{this.state.error}</div>
                : null}
            </div>
        )
    }
}

export default Field
