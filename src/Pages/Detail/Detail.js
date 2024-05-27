import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import Right from '~/Components/CP_Detail/Right/Right';
import Left from '~/Components/CP_Detail/Left/Left';

const cx = classNames.bind(styles);
function Detail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Left></Left>
            </div>
            <div className={cx('right')}>
                <Right></Right>
            </div>
        </div>
    );
}

export default Detail;
