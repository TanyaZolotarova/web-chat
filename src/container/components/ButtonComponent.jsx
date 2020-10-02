import * as React from 'react';

const ButtonComponent = ({type, areaLabel, dataDismiss, onClick, disabled, className, title}) => {

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
            data-dismiss={dataDismiss}
            aria-label={areaLabel}
        >{title}
        </button>

    )

}

export default ButtonComponent;