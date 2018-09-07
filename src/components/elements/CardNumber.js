import React, {Component} from 'react'
import classNames from 'classnames'

// Components
import {Number} from 'react-credit-card-primitives'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Styles
import './Field.css'

class CardNumber extends Component {
    state = {
        focused: false,
        value: '',
        valid: false,
        error: ''
    }

    validate = () => {
        let error = ''

        if (this.state.value) {
            if (!this.state.valid) {
                error = 'Not a valid card number'
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

    handleChange = field => {
        this.setState({
            value: field.value,
            valid: field.valid,
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
                <Number cardTypes={['American Express', 'Discover', 'Mastercard', 'Visa']}
                        onChange={this.handleChange}
                        render={({
                            getInputProps
                        }) =>
                            <input {...getInputProps()}
                                   placeholder=""
                                   className="field__input"
                                   onFocus={this.handleFocus}
                                   onBlur={this.handleBlur}
                            />
                        }
                />
                <FontAwesomeIcon icon="lock" className="field__icon" style={styles.icon}/>
                {this.state.error ?
                    <div className="field__error">{this.state.error}</div>
                : null}
            </div>
        )
    }
}

const styles = {
    icon: {
        right: '20px',
        color: '#dddddd'
    }
}

export default CardNumber
