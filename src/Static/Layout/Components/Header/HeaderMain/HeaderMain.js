import classNames from 'classnames/bind';
import styles from './HeaderMain.module.scss';
import { BagIcon, ExchangeIcon, HeartIcon, PhoneIcon, UserIcon } from '~/Static/icons/icons';
import Tippy from '@tippyjs/react';
import Logo from '~/Components/components/Logo/Logo';
import Icon from '~/Components/components/Icon';

const cx = classNames.bind(styles);
function HeaderMain({ scrolled }) {
    let classNames = cx('wrapper');
    if (scrolled == true && classNames) {
        classNames = cx('wrapper', {
            [styles.scrolled]: scrolled,
        });
    }
    return (
        <div className={classNames}>
            <div className={cx('header-left')}>
                <Tippy className={cx('title')} content="Trang chủ" placement="bottom">
                    <div>
                        <Logo></Logo>
                    </div>
                </Tippy>
            </div>
            <Tippy className={cx('title')} content="19006750" placement="bottom">
                <div className={cx('header-center')}>
                    <Icon green>
                        <PhoneIcon></PhoneIcon>
                    </Icon>
                    <span className={cx('text')}>
                        GỌI NGAY <b>19006750</b>
                    </span>
                </div>
            </Tippy>
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
                    <div className={cx('number')}>0</div>
                </a>
                <a src="/" className={cx('icon')}>
                    <Icon>
                        <HeartIcon></HeartIcon>
                    </Icon>
                    <div className={cx('number')}>0</div>
                </a>
                <a src="/" className={cx('icon')}>
                    <Icon>
                        <BagIcon></BagIcon>
                    </Icon>
                    <div className={cx('number')}>0</div>
                </a>
            </div>
        </div>
    );
}

export default HeaderMain;
