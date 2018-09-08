import React, {Component} from 'react'
import classNames from 'classnames'

// Styles
import './Field.css'

// Images
import dropdownIcon from '../../assets/images/dropdown.svg'
import dropdownPinkIcon from '../../assets/images/dropdown-pink.svg'

class Field extends Component {
    state = {
        focused: false,
        value: this.props.value || '',
        error: ''
    }

    validate = () => {
        let error = ''

        if (this.props.required && !this.state.value) {
            error = 'This field is required'
        }

        this.setState({error})
    }

    handleFocus = () => {
        this.setState({focused: true})
    }

    handleBlur = () => {
        this.setState({focused: false})
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
            error: ''
        }, () => this.validate())
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
                <select className="field__input"
                       value={this.state.value}
                       onFocus={this.handleFocus}
                       onBlur={this.handleBlur}
                       onChange={this.handleChange}
                >
                    {this.props.options.map(option =>
                        <option value={option} key={option}>{option}</option>
                    )}
                </select>
                <img src={dropdownPinkIcon} className="field__icon" alt="" style={styles.icon}/>
                {this.state.error ?
                    <div className="field__error">{this.state.error}</div>
                : null}
            </div>
        )
    }
}

const styles = {
    icon: {
        right: '19px'
    }
}

export default Field
