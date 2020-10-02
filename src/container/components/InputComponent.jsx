import * as React from 'react';

const InputComponent = ({title, className, htmlFor, inputRef , type, placeholder, id, value, onChange, name, error,readOnly }) => {




    return (
    <div className="form-group">
        <fieldset>
            <label htmlFor={htmlFor}>{title}</label>
            <input type={type}
                   className={className}
                   name={name}
                   value={value}
                   onChange={onChange}
                   ref={inputRef}
                   id={id}
                   placeholder={placeholder}
                   readOnly = {readOnly}
            />

            {error && <p className="error error-staff">{error.message}</p>}
        </fieldset>
    </div>

    )

}

export default InputComponent;