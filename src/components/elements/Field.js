import React, {Component} from 'react'
import classNames from 'classnames'

// Styles
import './Field.css'

class Field extends Component {
    state = {
        focused: false,
        value: this.props.value || '',
        error: ''
    }

    validate = () => {
        const minLength = this.props.minLength
        let error = ''

        if (this.state.value) {
            if (minLength && (this.state.value.length < minLength)) {
                error = `Must be at least ${minLength} chars`
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

    handleChange = event => {
        this.setState({
            value: event.target.value,
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
                <input className="field__input"
                       type={this.props.type}
                       value={this.state.value}
                       onFocus={this.handleFocus}
                       onBlur={this.handleBlur}
                       onChange={this.handleChange}
                />
                {this.state.error ?
                    <div className="field__error">{this.state.error}</div>
                : null}
            </div>
        )
    }
}

export default Field
