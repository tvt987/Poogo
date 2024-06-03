import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { AddIcon, CheckIcon, FireIcon, MinusIcon } from '~/Static/icons/icons';
import Product from '~/Components/components/Product/Product';
import ImageHover from '../ImageHover/ImageHover';

const cx = classNames.bind(styles);

function Left() {
    const [linkImage, setLinkImage] = useState(''); // Correctly destructure useState as an array
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const tab1Ref = useRef();
    const tab2Ref = useRef();
    const tab3Ref = useRef();
    const content1Ref = useRef();
    const content2Ref = useRef();
    const content3Ref = useRef();
    const lineRef = useRef();

    useEffect(() => {
        const targetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // 10 days from now
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleTab = (e, number) => {
        const leftPosition = e.target.offsetLeft;
        const widthPosition = e.target.offsetWidth;

        lineRef.current.style.left = leftPosition + 'px';
        lineRef.current.style.width = widthPosition + 'px';

        content1Ref.current.style.display = number === 1 ? 'inline-block' : 'none';
        content2Ref.current.style.display = number === 2 ? 'inline-block' : 'none';
        content3Ref.current.style.display = number === 3 ? 'inline-block' : 'none';
    };

    const handleListImage = (link) => {
        setLinkImage(link); // Set the linkImage state to the new image link
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('detail')}>
                <div className={cx('left')}>
                    <div className={cx('main')}>
                        <ImageHover link={linkImage}></ImageHover>
                    </div>
                    <div className={cx('list')}>
                        <div
                            onClick={() =>
                                handleListImage(
                                    'https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer3.jpg?v=1702350251907',
                                )
                            }
                            className={cx('item')}
                        >
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer3.jpg?v=1702350251907" />
                        </div>
                        <div
                            onClick={() =>
                                handleListImage(
                                    'https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer2.jpg?v=1702350251907',
                                )
                            }
                            className={cx('item')}
                        >
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer2.jpg?v=1702350251907" />
                        </div>
                        <div
                            onClick={() =>
                                handleListImage(
                                    'https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/product.jpg?v=170235025190',
                                )
                            }
                            className={cx('item')}
                        >
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/product.jpg?v=1702350251907" />
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('flash-sale')}>
                        <div className={cx('left')}>
                            <div className={cx('wrapper-img')}>
                                <FireIcon></FireIcon>
                            </div>
                            <div className={cx('title')}>flash sale</div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('time')}>
                                <div className={cx('segment')}>
                                    <div className={cx('number')}>{countdown.days}</div>
                                    <div className={cx('text')}>days</div>
                                </div>
                                <div className={cx('segment')}>
                                    <div className={cx('number')}>{countdown.hours}</div>
                                    <div className={cx('text')}>hours</div>
                                </div>
                                <div className={cx('segment')}>
                                    <div className={cx('number')}>{countdown.minutes}</div>
                                    <div className={cx('text')}>minutes</div>
                                </div>
                                <div className={cx('segment')}>
                                    <div className={cx('number')}>{countdown.seconds}</div>
                                    <div className={cx('text')}>seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('name')}>Giày Nam Air Jordan 14 Retro</div>
                    <div className={cx('title')}>
                        <span>Thương hiệu: </span>
                        <span>Nike Air </span>
                        <span>Tình trạng: </span>
                        <span>Còn hàng </span>
                    </div>
                    <div className={cx('price')}>
                        <div className={cx('price-new')}>2.200.000đ</div>
                        <div className={cx('price-old')}>4.500.000đ</div>
                    </div>
                    <div className={cx('colors')}>
                        <div className={cx('header')}>Màu sắc</div>
                        <div className={cx('body')}>
                            <div className={cx('color', 'color--yellow')}>
                                <div className={cx('icon')}>
                                    <CheckIcon></CheckIcon>
                                </div>
                            </div>
                            <div className={cx('color', 'color--red')}></div>
                            <div className={cx('color', 'color--green')}></div>
                        </div>
                    </div>
                    <div className={cx('numbers')}>
                        <div className={cx('minus')}>
                            <MinusIcon />
                        </div>
                        <div className={cx('wrapper-ipt')}>
                            <input placeholder="1" type="text" />
                        </div>
                        <div className={cx('add')}>
                            <AddIcon />
                        </div>
                        <button>Mua ngay</button>
                    </div>
                    <div className={cx('ship')}>
                        <div className={cx('div-1')}>
                            <div className={cx('left')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach1.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>Đổi trả cực dễ chỉ cần số điện thoại</div>
                            </div>
                            <div className={cx('right')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach2.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>Miễn phí vận chuyển cho đơn hàng trên 200K</div>
                            </div>
                        </div>
                        <div className={cx('div-2')}>
                            <div className={cx('left')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach3.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>60 ngày đổi và trả vì bất kỳ lý do gì</div>
                            </div>

                            <div className={cx('right')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach4.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>Cam kết chính hãng 100% Phát hiện hàng giả đền 10 lần</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('tabs')}>
                <div className={cx('tab')} ref={tab1Ref} onClick={(e) => handleTab(e, 1)}>
                    Mô tả
                </div>
                <div className={cx('tab')} ref={tab2Ref} onClick={(e) => handleTab(e, 2)}>
                    Chính sách đổi trả
                </div>
                <div className={cx('tab')} ref={tab3Ref} onClick={(e) => handleTab(e, 3)}>
                    Đánh giá
                </div>
                <div className={cx('line')} ref={lineRef}></div>
            </div>
            <div className={cx('content')}>
                <div ref={content1Ref} className={cx('content', 'content-1')} style={{ display: 'inline-block' }}>
                    <div className={cx('description')}>
                        Nike Air Jordan 14 Retro là biểu tượng của sự kết hảo giữa tốc độ vượt trội và phong cách đẳng
                        cấp. Đôi giày sneaker này sở hữu gam màu Light Ginger, Trắng và Đen tạo nên vẻ ngoài táo bạo và
                        độc đáo, thu hút sự chú ý bất kỳ nơi nào bạn đến. Được chế tạo với tinh tế và sự chú ý đến từng
                        chi tiết, đôi giày này có phần trên màu da lộn màu vàng với điểm nhấn màu đen, tạo thêm độ sâu
                        và sự tinh tế cho thiết kế. Đế trắng không chỉ phù hợp với gam màu mà còn mang lại độ bám và độ
                        bền vượt trội. Thiết kế cho sự thoải mái tối đa, Nike Air Jordan 14 Retro tích hợp công nghệ đệm
                        khí Air của Nike, mang đến sự đàn hồi và êm ái mỗi bước đi. Gối đệm cổ chân và lưỡi gà đệm cung
                        cấp sự hỗ trợ bổ sung cho mắt cá chân và giữ chân vững chắc, an toàn. Cho dù bạn đang đi dạo
                        trên phố hay thi đấu trên sân bóng rổ, đôi giày này được thiết kế để biểu diễn. Vật liệu nhẹ và
                        thoáng khí giúp giữ cho đôi chân mát mẻ và khô ráo, trong khi chất liệu chắc chắn có thể chịu
                        đựng những hoạt động gay gắt. Nổi bật khác biệt và thể hiện phong cách độc đáo của bạn với đôi
                        giày Nike Air Jordan 14 Retro. Sở hữu ngay đôi giày này và trải nghiệm sự kết hợp hoàn hảo giữa
                        thời trang và tính năng.
                    </div>
                </div>
                <div ref={content2Ref} className={cx('content', 'content-2')}>
                    + Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện + Nằm trong chính sách đổi trả sản phẩm
                    của Bean + Sản phẩm còn nguyên tem mác không bị rớt vỡ, vô nước + Thời gian đổi trả nhỏ hơn 15 ngày
                    kể từ ngày nhận hàng + Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí Điều kiện
                    đổi trả hàng Điều kiện về thời gian đổi trả: trong vòng 07 ngày kể từ khi nhận được hàng và phải
                    liên hệ gọi ngay cho chúng tôi theo số điện thoại trên để được xác nhận đổi trả hàng. Điều kiện đổi
                    trả hàng: - Sản phẩm gửi lại phải còn nguyên đai nguyên kiện - Phiếu bảo hành (nếu có) và tem của
                    công ty trên sản phẩm còn nguyên vẹn. - Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy hướng dẫn sử
                    dụng và không bị trầy xước, bể. - Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí
                    liên lạc tối đa tương đương 10% giá trị đơn hàng.
                </div>
                <div ref={content3Ref} className={cx('content', 'content-3')}>
                    <div className={cx('bg')}>
                        <div className={cx('title')}>
                            Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản
                            phẩm này.
                        </div>
                        <button>Gửi đánh giá của bạn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;
