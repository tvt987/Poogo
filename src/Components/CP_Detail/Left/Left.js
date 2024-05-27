import classNames from 'classnames/bind';
import styles from './Left.module.scss';

const cx = classNames.bind(styles);
function Left() {
    return <div className={cx('wrapper')}>b</div>;
}

export default Left;
