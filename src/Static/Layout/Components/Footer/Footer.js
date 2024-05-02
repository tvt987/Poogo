import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import {
    EnvelopeIcon,
    FaceIcon,
    InstagramIcon,
    LocationIcon,
    PinterestIcon,
    TwitterIcon,
    YoutubeIcon,
} from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('item-1')}>hệ thống cửa hàng toàn quốc</div>
                    <div className={cx('item-2')}>chính sách</div>
                    <div className={cx('item-3')}>đăng ký nhận tin</div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('content', 'content-1')}>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <LocationIcon></LocationIcon>
                            </div>
                            <div className={cx('text')}>POOGO Đội Cần</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Địa chỉ</div>
                            <div className={cx('text')}>Tòa Ladeco, 266 Đội Cần - Ba Đình - Hà Nội</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Hotline</div>
                            <div className={cx('text', 'phone')}>19006750</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <LocationIcon></LocationIcon>
                            </div>
                            <div className={cx('title')}>POOGO Lữ Gia</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Địa chỉ: </div>
                            <div className={cx('text', 'phone')}>70 Lữ Gia - Quận11 - TP.Hồ Chí Mình</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Hotline: </div>
                            <div className={cx('text', 'phone')}>1900675</div>
                        </div>
                    </div>
                    <div className={cx('content', 'content-2')}>
                        <div className={cx('item')}>Trang chủ</div>
                        <div className={cx('item')}>Giới thiệu</div>
                        <div className={cx('item')}>Sản phẩm</div>
                        <div className={cx('item')}>Tin tức</div>
                        <div className={cx('item')}>Liên hệ</div>
                        <div className={cx('item')}>Hệ thống cửa hàng</div>
                    </div>
                    <div className={cx('content', 'content-3')}>
                        <div className={cx('item')}>
                            <div className={cx('text')}>
                                Đăng ký nhận bản tin của chúng tôi để nhận các sản phẩm mới, mã khuyến mãi nhanh nhất
                            </div>
                        </div>
                        <div className={cx('item', 'item-ipt')}>
                            <input placeholder="Email của bạn..." />
                            <div className={cx('icon-mail')}>
                                <EnvelopeIcon></EnvelopeIcon>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <TwitterIcon></TwitterIcon>
                            </div>
                            <div className={cx('icon')}>
                                <FaceIcon></FaceIcon>
                            </div>
                            <div className={cx('icon')}>
                                <PinterestIcon></PinterestIcon>
                            </div>
                            <div className={cx('icon')}>
                                <InstagramIcon></InstagramIcon>
                            </div>
                            <div className={cx('icon')}>
                                <YoutubeIcon></YoutubeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('wrapper-footer')}>
                    <div className={cx('left')}>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/img_payment_1.png?1708418149368" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/img_payment_2.png?1708418149368" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/img_payment_3.png?1708418149368" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/img_payment_4.png?1708418149368" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/img_payment_5.png?1708418149368" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/img_payment_6.png?1708418149368" />
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div>
                            © Bản quyền thuộc về <a>Poogo</a> | Cung cấp bởi <a>Văn Tình</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
