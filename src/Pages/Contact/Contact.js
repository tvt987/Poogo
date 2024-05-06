import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import TitlePage from '~/Components/components/TitlePage/TitlePage';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('container')}>
            <TitlePage title="liên hệ" name1="Trang chủ" name2="Liên hệ"></TitlePage>{' '}
            <div className={cx('wrapper')}>
                <div className={cx('map')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.414698607303!2d106.68809554999999!3d10.8225079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e1ae56affd%3A0x6f982b3fa1fd9728!2zQ2jhu6MgVMOibiBTxqFuIE5o4bqldCAtIDc5LTgxIC0gTmd1eeG7hW4gS2nhu4dt!5e0!3m2!1svi!2s!4v1715003721482!5m2!1svi!2s"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className={cx('body')}>
                    <div className={cx('contact')}>
                        <div className={cx('title')}>Liên hệ</div>
                        <div className={cx('body')}>
                            <div className={cx('item')}>Địa chỉ: Phan Văn Trị, Bình Thạnh, Thành Phố Hồ Chí Minh</div>
                            <div className={cx('item')}>Việt Nam</div>
                            <div className={cx('item')}>
                                Điện thoại: <span>0325456xxx</span>
                            </div>
                            <div className={cx('item')}>
                                Email: <span>tinhkun102@gmail.com</span>{' '}
                            </div>
                        </div>
                    </div>
                    <div className={cx('message')}>
                        <div className={cx('title')}>Gửi tin nhắn cho chúng tôi</div>
                        <div className={cx('body')}>
                            <div className={cx('wrapper-1')}>
                                <input placeholder="Họ tên*" />
                                <input placeholder="Email*" />
                            </div>
                            <div className={cx('wrapper-2')}>
                                <input placeholder="Điện thoại*" />
                            </div>
                            <div className={cx('wrapper-3')}>
                                <textarea placeholder="Nhập nội dung*"></textarea>
                            </div>
                            <div className={cx('wrapper-4')}>
                                <button>Gửi liên hệ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
