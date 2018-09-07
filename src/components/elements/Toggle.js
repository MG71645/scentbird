import React from 'react'
import classNames from 'classnames'

const Toggle = props => {
    return (
        <span className={classNames('toggle', props.className, {'toggle-on': props.checked})}
               onClick={props.onChange}
        >
            {props.children}
        </span>
    )
}

export default Toggle
