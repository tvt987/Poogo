import classNames from 'classnames/bind';
import styles from './Chain.module.scss';
import TitlePage from '~/Components/components/TitlePage/TitlePage';

const cx = classNames.bind(styles);
function Chain() {
    return (
        <div className={cx('wrapper')}>
            <TitlePage title="hệ thống cửa hàng" name1="Trang chủ" name2="Hệ thống cửa hàng"></TitlePage>
            <div className={cx('map')}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.414698607303!2d106.68809554999999!3d10.8225079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e1ae56affd%3A0x6f982b3fa1fd9728!2zQ2jhu6MgVMOibiBTxqFuIE5o4bqldCAtIDc5LTgxIC0gTmd1eeG7hW4gS2nhu4dt!5e0!3m2!1svi!2s!4v1715003721482!5m2!1svi!2s"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className={cx('table')}>
                    <div className={cx('header')}>danh sách cửa hàng</div>
                    <div className={cx('body')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Chọn tỉnh thành</div>
                            <div className={cx('wrapper-ipt')}>
                                <select>
                                    <option>Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Hà Nội</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Chọn cửa hàng</div>
                            <div className={cx('wrapper-ipt')}>
                                <select>
                                    <option>Chi Nhánh Quận 1, TP HCM</option>
                                    <option>Chi Nhánh Quận 4, TP HCM</option>
                                    <option>Chi Nhánh Quận 9, TP HCM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <div className={cx('title')}>Thông tin chi tiết</div>
                        <div className={cx('text')}>100 Đường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chain;
