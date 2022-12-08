import React, { FC } from 'react';
import cx from 'classnames'

type IBtnSize = 'small' | 'large'

type IBtnType = 'link' | 'primary' | 'danger'

interface IBtnProps {
  type?: IBtnType;
  size?: IBtnSize;
  disabled?: boolean;
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

export const Button: FC<IBtnProps> = (props) => {
  const { type, size, disabled, className, children, href } = props
  const classes = cx({
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    className
  })
  if (type === 'link' && href) {
    return <a className={classes} href={href}>{ children }</a>
  }
   return (<button
     className={classes}
     disabled
  >
    {children}
  </button>)
}