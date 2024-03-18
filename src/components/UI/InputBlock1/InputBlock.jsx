import React, { useState } from 'react'
import classes from './InputBlock1.module.css'

const InputBlock1 = function ({ children, ...props }) {

    return (
      <div className={classes.inputBlock}>
        <span className='text1'> {children} </span>
        <input name={props.name} className={classes.input} type={props.type} placeholder={props.placeholder} />
      </div>
    )
}

export default InputBlock1;














