import classNames from 'classnames/bind';
import styles from './TitlePage.module.scss';
import { CircleIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);

function TitlePage({ title, name1, name2 }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('name')}>{title}</div>
                <div className={cx('title')}>
                    {name1}{' '}
                    <span className={cx('icon')}>
                        <CircleIcon></CircleIcon>
                    </span>{' '}
                    <div className={cx('about')}>{name2}</div>
                </div>
            </div>
        </div>
    );
}

export default TitlePage;
