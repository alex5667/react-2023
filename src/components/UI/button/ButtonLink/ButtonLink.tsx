import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cl from './ButtonLink.module.scss';

type ButtonLinkProps = NavLinkProps;

const ButtonLink: FC<ButtonLinkProps> = ({ children, ...rest }) => {
  return (
    <NavLink className={cl.btnLink} {...rest}>
      {children}
    </NavLink>
  );
};

export default ButtonLink;
