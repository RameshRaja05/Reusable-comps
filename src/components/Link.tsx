import React from 'react';
import classNames from 'classnames';
import UseNavigation from '../hooks/use-navigation';
import { linkProps } from '../types/link';

function Link({ to, children, className,activeClassName }: linkProps){
    const { navigate,currentPath } = UseNavigation();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        //if user press ctrl key ,we let the browser's default behavior
        if (!e.ctrlKey) {
            e.preventDefault();
            navigate(to);
        }
    };
                                                          //check which path is active then give active style
    const classes = classNames('text-blue-500', className,to===currentPath&&activeClassName);

    return (
        <>
            <a className={classes} href={to} onClick={handleClick}>
                {children}
            </a>
        </>
    );
}

export default Link;
