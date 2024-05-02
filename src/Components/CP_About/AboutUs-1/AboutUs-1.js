import classNames from 'classnames/bind';
import styles from './AboutUs-1.module.scss';
import { CircleIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);

function AboutUs1() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('name')}>giới thiệu</div>
                <div className={cx('title')}>
                    Trang chủ{' '}
                    <span className={cx('icon')}>
                        <CircleIcon></CircleIcon>
                    </span>{' '}
                    <div className={cx('about')}>Giới thiệu</div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs1;
