import React from 'react'
import classes from './ContinueButton.module.css'

const ContinueButton = function ({ children, ...props }) {

    return (
      <button className={classes.button} type={"submit"}>
        {children}
      </button>
    )
}

export default ContinueButton;






