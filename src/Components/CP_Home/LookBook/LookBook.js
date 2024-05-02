import classNames from 'classnames/bind';
import styles from './LookBook.module.scss';
import { CloseIcon, PlusIcon } from '~/Static/icons/icons';
import { ProductFemale, ProductMale } from './Products/Products.js';

const cx = classNames.bind(styles);
function LookBook() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('header')}>
                    LOOK BOOK
                    <div className={cx('title')}>GIÀY CHẠY BỘ NHIỀU NHẤT</div>
                </div>
                <div className={cx('body')}>
                    Bước vào thế giới của sự thoải mái và phong cách vô song với những đôi giày đặc biệt này chúng chắc
                    chắn sẽ để lại ấn tượng lâu dài nhất ở bất cứ nơi nào bạn đến
                </div>
                <div className={cx('buttons')}>
                    <button className={cx('btn-male', 'btn')}>GIÀY NAM</button>
                    <button className={cx('btn-female', 'btn')}>GIÀY NỮ</button>
                </div>
            </div>
            <div className={cx('right')}>
                <ProductMale></ProductMale>
                <ProductFemale></ProductFemale>
            </div>
        </div>
    );
}

export default LookBook;
