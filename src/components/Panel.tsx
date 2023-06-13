import classNames from 'classnames';
import { panelProps } from '../types/panel';

function Panel({ children, className, ...rest }: panelProps){
    const classes = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    );
    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    );
}

export default Panel;
