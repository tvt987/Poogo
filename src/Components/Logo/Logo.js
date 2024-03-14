import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);
function Logo() {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('link')}>
                <img
                    className={cx('img')}
                    src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/logo.png?1708418149368"
                    alt="Lỗi"
                />
            </a>
        </div>
    );
}

export default Logo;
