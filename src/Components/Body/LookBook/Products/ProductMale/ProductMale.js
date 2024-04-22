import classNames from 'classnames/bind';
import styles from './ProductMale.module.scss';
import { CloseIcon, PlusIcon } from '~/Static/icons/icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // Import CSS của Tippy
const cx = classNames.bind(styles);
function ProductMale() {
    return (
        <div className={cx('gender', 'gender--male')}>
            <Tippy
                interactive={true} // Cho phép tooltip tự đóng khi click ra ngoài
                trigger="click"
                render={() => (
                    <div className={cx('item-product')}>
                        <div className={cx('img-wrapper')}>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer12137b41646ee49b99d29fc01.jpg?v=1702350249013" />
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('name')}>Giày Nam Men's Air Jordan 2 Retro</div>
                            <div className={cx('price')}>3.200.000đ</div>
                        </div>
                    </div>
                )}
            >
                <div className={cx('icon', 'icon--plus1')}>
                    <PlusIcon></PlusIcon>
                </div>
            </Tippy>

            <div className={cx('icon', 'icon--close1')}>
                <CloseIcon></CloseIcon>
            </div>
            <Tippy
                interactive={true} // Cho phép tooltip tự đóng khi click ra ngoài
                trigger="click"
                render={() => (
                    <div className={cx('item-product')}>
                        <div className={cx('img-wrapper')}>
                            <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer12137b41646ee49b99d29fc01.jpg?v=1702350249013" />
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('name')}>Giày Nam Men's Air Jordan 2 Retro</div>
                            <div className={cx('price')}>3.200.000đ</div>
                        </div>
                    </div>
                )}
            >
                <div className={cx('icon', 'icon--plus2')}>
                    <PlusIcon></PlusIcon>
                </div>
            </Tippy>

            <div className={cx('icon', 'icon--close2')}>
                <CloseIcon></CloseIcon>
            </div>

            <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_banner1.jpg?1708418149368" />
        </div>
    );
}

export default ProductMale;
