import classNames from 'classnames/bind';
import styles from './Compares.module.scss';
const cx = classNames.bind(styles);

function Compares() {
    return (
        <div className={cx('wrapper')}>
            <table border={1}>
                <tr className={cx('images')}>
                    <td>Hình ảnh</td>
                    <td>
                        <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer12137b41646ee49b99d29fc01.jpg?v=1702350249013" />{' '}
                    </td>
                    <td>
                        <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer112344afd2dbe4842b4562af5.jpg?v=1702350247140" />{' '}
                    </td>
                    <td>
                        <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer3.jpg?v=1702350251907" />
                    </td>
                </tr>
                <tr className={cx('names')}>
                    <td>Tên sản phẩm</td>
                    <td>Giày Nam Men's Air Jordan 2 Retro</td>
                    <td>Nike Air Max 97 SE</td>
                    <td>Giày Nam Air Jordan 14 Retro</td>
                </tr>
                <tr className={cx('prices')}>
                    <td>Giá</td>
                    <td>3.200.000₫</td>
                    <td>2.800.000₫</td>
                    <td>2.200.000₫</td>
                </tr>
                <tr className={cx('states')}>
                    <td>Tình trạng</td>
                    <td>Còn hàng</td>
                    <td>Còn hàng</td>
                    <td>Còn hàng</td>
                </tr>
                <tr className={cx('types')}>
                    <td>Loại</td>
                    <td>Giày Nam</td>
                    <td>Giày Nam</td>
                    <td>Giày Nam</td>
                </tr>
                <tr className={cx('supplier')}>
                    <td>Nhà cung cấp</td>
                    <td>Nike Jordan</td>
                    <td>Nike Air Max</td>
                    <td>Nike Air</td>
                </tr>
                <tr className={cx('uses')}>
                    <td>Công dụng nổi bật</td>
                    <td>
                        <div>Đang cập nhật...</div>
                        <button>Xóa</button>
                    </td>
                    <td>
                        <div>Đang cập nhật...</div>
                        <button>Xóa</button>
                    </td>
                    <td>
                        <div>Đang cập nhật...</div>
                        <button>Xóa</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Compares;
