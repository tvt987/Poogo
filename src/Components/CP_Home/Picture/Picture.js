import classNames from 'classnames/bind';
import styles from './Picture.module.scss';
import { PlayIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function Picture() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Sản phẩm được mua nhiều nhất tháng này</div>
            <div className={cx('content')}>giày chạy bộ</div>
            <div className={cx('wrapper-play')}>
                <div className={cx('play')}>
                    <PlayIcon></PlayIcon>
                </div>
                <div className={cx('play-circle')}></div>
            </div>
        </div>
    );
}

export default Picture;
