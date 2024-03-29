import classNames from 'classnames/bind';
import styles from './CountDown.module.scss';

const cx = classNames.bind(styles);

function CountDown({ value, time }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('number')}>{value}</div>
            <div className={cx('text')}>{time}</div>
        </div>
    );
}

export default CountDown;
