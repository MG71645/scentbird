import React, {Component} from 'react'
import classNames from 'classnames'

class Radio extends Component {
    state = {
        value: ''
    }

    setValue = value => {
        this.setState({value})
    }

    render() {
        return this.props.children.map(option =>
            <div className={classNames('option', option.props.className, {'option-selected': option.props.value === this.state.value})}
                 onClick={() => this.setValue(option.props.value)}
                 key={option.props.value}
            >
                {option.props.children}
            </div>
        )
    }
}

export default Radio
