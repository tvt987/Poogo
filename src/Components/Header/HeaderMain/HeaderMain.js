import classNames from 'classnames/bind';
import styles from './HeaderMain.module.scss';
import Logo from '~/Components/Logo/Logo';
import { BagIcon, ExchangeIcon, HeartIcon, PhoneIcon, UserIcon } from '~/Static/icons/icons';
import Icon from '~/Components/Icon';

const cx = classNames.bind(styles);
function HeaderMain() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <Logo></Logo>
            </div>
            <div className={cx('header-center')}>
                <Icon green>
                    <PhoneIcon></PhoneIcon>
                </Icon>
                <span className={cx('text')}>
                    GỌI NGAY <b>19006750</b>
                </span>
            </div>
            <div className={cx('header-right')}>
                <a src="/" className={cx('icon')}>
                    <Icon>
                        <UserIcon></UserIcon>
                    </Icon>
                </a>
                <a src="/" className={cx('icon')}>
                    <Icon>
                        <ExchangeIcon></ExchangeIcon>
                    </Icon>
                </a>
                <a src="/" className={cx('icon')}>
                    <Icon>
                        <HeartIcon></HeartIcon>
                    </Icon>
                </a>
                <a src="/" className={cx('icon')}>
                    <Icon>
                        <BagIcon></BagIcon>
                    </Icon>
                </a>
            </div>
        </div>
    );
}

export default HeaderMain;
