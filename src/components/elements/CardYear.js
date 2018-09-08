import React, {Component} from 'react'
import classNames from 'classnames'

// Styles
import './Field.css'

// Images
import dropdownIcon from '../../assets/images/dropdown.svg'
import dropdownPinkIcon from '../../assets/images/dropdown-pink.svg'

class CardYear extends Component {
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
        const years = []
        const year = (new Date()).getFullYear()
        for (let i = 0; i < 26; i++) years.push(year + i)
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
                    {years.map(year =>
                        <option value={year} key={year}>{year}</option>
                    )}
                </select>
                <img src={dropdownIcon} className="field__icon" alt="" style={styles.icon}/>
                {this.props.error ?
                    <div className="field__error">{this.props.error}</div>
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

export default CardYear
