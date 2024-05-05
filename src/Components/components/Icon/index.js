import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles);
function Icon({ green, children }) {
    let classNames = cx('icon');
    if (green) {
        classNames = cx('icon', {
            green,
        });
    }
    return (
        <span className={classNames}>
            <span>{children}</span>
        </span>
    );
}

export default Icon;
