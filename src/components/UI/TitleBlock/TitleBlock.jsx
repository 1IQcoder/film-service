import React from 'react'
import classes from './TitleBlock.module.css'

const TitleBlock = function ({ children, ...props} ) {

    return (
      <div className={classes.topBlock}>
        <span className='title1'>{children}</span>
      </div>
    )
}

export default TitleBlock;















