import classNames from 'classnames/bind';
import styles from './BuyNow.module.scss';

const cx = classNames.bind(styles);
function BuyNow() {
    return <div className={cx('wrapper')}></div>;
}

export default BuyNow;
