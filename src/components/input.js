import React from 'react'

export default function ElementForm(props) {
    const {type, name, placeholder, value, defaultValue} = props
    let { className }= props

    switch (type) {
        case 'select':
            const options = props.options.map((value,i) => <option value={value} key={`option-${name}-${i}`}>{value}</option>)
            return(
                <select className={`App-select ${className || ''}`} name={name}
                        defaultValue={defaultValue}
                        onChange={props.handleChange}
                >
                    { options }
                </select>
            );
        // case 'checkbox': return;
        default:
            const addOpts = { placeholder: placeholder || name }

            if (defaultValue === '') { addOpts.defaultValue = defaultValue }
            if ('disabled' in props && props.disabled) { addOpts.disabled = true }
            if (props['maxLength']) { addOpts.maxLength = props['maxLength'] }

            return (
                <input type={type || 'text'} className={`App-input ${className || ''}`}
                       name={name}
                       onChange={(ev) => {
                           if (props['maxLength'] ) {
                               if (ev.target.value.length <= props['maxLength']) {
                               props.handleChange(ev) }
                           } else {
                               props.handleChange(ev)
                           }
                       }}
                       value={value}
                       { ... addOpts }
                />
            )
    }
}
