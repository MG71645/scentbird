import React, {Component} from 'react'
import classNames from 'classnames'

// Styles
import './Field.css'

class CardMonth extends Component {
    state = {
        focused: false,
    }

    handleFocus = () => {
        this.setState({focused: true})
    }

    handleBlur = () => {
        this.setState({focused: false})
        this.handleChange()
    }

    handleChange = () => {
        this.props.onChange({
            value: this.input.value
        })
    }

    render() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December']
        const className = classNames('field', this.props.className, {
            'field-empty': !this.input,
            'field-focused': this.state.focused,
            'field-error': this.props.error
        })

        return (
            <div className={className}>
                {this.props.placeholder ?
                    <label className="field__placeholder">{this.props.placeholder}</label>
                : null}
                <select className="field__input"
                        ref={select => this.input = select}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                >
                    <option/>
                    {months.map((month, index) =>
                        <option value={index} key={month}>{month}</option>
                    )}
                </select>
                {this.props.error ?
                    <div className="field__error">{this.props.error}</div>
                : null}
            </div>
        )
    }
}

export default CardMonth
