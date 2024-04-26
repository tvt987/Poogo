import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';

const cx = classNames.bind(styles);
function Gallery() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-1')}>
                <div className={cx('item-1')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_instagram_img1.jpg?1708418149368" />
                </div>
                <div className={cx('item-2')}>Theo dõi instagram của chúng tôi</div>
                <div className={cx('item-1')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_instagram_img2.jpg?1708418149368" />
                </div>
            </div>
            <div className={cx('wrapper-2')}>
                <div className={cx('item-1')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_instagram_img3.jpg?1708418149368" />
                </div>
                <div className={cx('item-1')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_instagram_img4.jpg?1708418149368" />
                </div>
                <div className={cx('item-1')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_instagram_img5.jpg?1708418149368" />
                </div>
                <div className={cx('item-1')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_instagram_img6.jpg?1708418149368" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
