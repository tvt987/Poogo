import classNames from 'classnames/bind';
import styles from './Right.module.scss';

const cx = classNames.bind(styles);
function Right() {
    const handleCopy = (link) => {
        navigator.clipboard
            .writeText(link)
            .then(() => {
                alert('Đã sao chép liên kết hình ảnh vào clipboard!');
            })
            .catch((err) => {
                console.error('Lỗi khi sao chép: ', err);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('discount')}>
                <div className={cx('header')}>
                    <div className={cx('wrapper-img')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/khuyen_mai_title.png?1708418149368" />
                    </div>
                    <div>khuyến mãi đặc biệt !!!</div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('item')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_khuyen_mai1.png?1708418149368" />
                        Áp dụng Phiếu quà tặng/Mã giảm giá theo ngành hàng.
                    </div>
                    <div className={cx('item')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_khuyen_mai1.png?1708418149368" />
                        Giảm giá 5% khi mua từ 5 sản phẩm trở lên.
                    </div>
                    <div className={cx('item')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_khuyen_mai3.png?1708418149368" />
                        Tặng 100.000₫ mua hàng tại website thành viên Halu Cosmetics, áp dụng khi mua Online tại Hà Nội
                        và 1 số khu vực khác.
                    </div>
                </div>
            </div>
            <div className={cx('codes')}>
                <div className={cx('item')}>
                    <div className={cx('body')}>
                        <div className={cx('name')}>nhập mã: hlu10</div>
                        <div className={cx('title')}>Mã giảm 10% cho đơn hàng tối thiểu 500k</div>
                    </div>
                    <div className={cx('footer')}>
                        <button onClick={() => handleCopy('HTTPS')}>Sao chép mã</button>
                        <div className={cx('condition')}>Điều kiện</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body')}>
                        <div className={cx('name')}>nhập mã: hlu10</div>
                        <div className={cx('title')}>Mã giảm 10% cho đơn hàng tối thiểu 500k</div>
                    </div>
                    <div className={cx('footer')}>
                        <button>Sao chép mã</button>
                        <div className={cx('condition')}>Điều kiện</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body')}>
                        <div className={cx('name')}>nhập mã: hlu10</div>
                        <div className={cx('title')}>Mã giảm 10% cho đơn hàng tối thiểu 500k</div>
                    </div>
                    <div className={cx('footer')}>
                        <button>Sao chép mã</button>
                        <div className={cx('condition')}>Điều kiện</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body')}>
                        <div className={cx('name')}>nhập mã: hlu10</div>
                        <div className={cx('title')}>Mã giảm 10% cho đơn hàng tối thiểu 500k</div>
                    </div>
                    <div className={cx('footer')}>
                        <button>Sao chép mã</button>
                        <div className={cx('condition')}>Điều kiện</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body')}>
                        <div className={cx('name')}>nhập mã: hlu10</div>
                        <div className={cx('title')}>Mã giảm 10% cho đơn hàng tối thiểu 500k</div>
                    </div>
                    <div className={cx('footer')}>
                        <button>Sao chép mã</button>
                        <div className={cx('condition')}>Điều kiện</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body')}>
                        <div className={cx('name')}>nhập mã: hlu10</div>
                        <div className={cx('title')}>Mã giảm 10% cho đơn hàng tối thiểu 500k</div>
                    </div>
                    <div className={cx('footer')}>
                        <button>Sao chép mã</button>
                        <div className={cx('condition')}>Điều kiện</div>
                    </div>
                </div>
            </div>
            <div className={cx('suggest')}>
                <div className={cx('header')}>có thể bạn sẽ thích</div>
                <div className={cx('body')}>
                    <div className={cx('item')}>
                        <div className={cx('wrapper-img')}>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer18cde9e508ba14790a6210491.jpg?v=1702350243257" />
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name')}>Giày Nam Jordan Max Aura</div>
                            <div className={cx('prices')}>
                                <div className={cx('price-new')}>2.800.000đ</div>
                                <div className={cx('price-old')}>4.500.000đ</div>
                            </div>
                        </div>
                        <div className={cx('discount')}>28%</div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('wrapper-img')}>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer18cde9e508ba14790a6210491.jpg?v=1702350243257" />
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name')}>Giày Nam Jordan Max Aura</div>
                            <div className={cx('prices')}>
                                <div className={cx('price-new')}>2.800.000đ</div>
                                <div className={cx('price-old')}>4.500.000đ</div>
                            </div>
                        </div>
                        <div className={cx('discount')}>28%</div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('wrapper-img')}>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer18cde9e508ba14790a6210491.jpg?v=1702350243257" />
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name')}>Giày Nam Jordan Max Aura</div>
                            <div className={cx('prices')}>
                                <div className={cx('price-new')}>2.800.000đ</div>
                                <div className={cx('price-old')}>4.500.000đ</div>
                            </div>
                        </div>
                        <div className={cx('discount')}>28%</div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('wrapper-img')}>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer18cde9e508ba14790a6210491.jpg?v=1702350243257" />
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name')}>Giày Nam Jordan Max Aura</div>
                            <div className={cx('prices')}>
                                <div className={cx('price-new')}>2.800.000đ</div>
                                <div className={cx('price-old')}>4.500.000đ</div>
                            </div>
                        </div>
                        <div className={cx('discount')}>28%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;
