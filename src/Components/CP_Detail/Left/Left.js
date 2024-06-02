import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { AddIcon, CheckIcon, FireIcon, MinusIcon } from '~/Static/icons/icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
function Left() {
    const tab1Ref = useRef();
    const tab2Ref = useRef();
    const tab3Ref = useRef();
    const content1Ref = useRef();
    const content2Ref = useRef();
    const content3Ref = useRef();
    const lineRef = useRef();
    const handleTab = (e, number) => {
        const leftPosition = e.target.offsetLeft;
        const widthPosition = e.target.offsetWidth;

        lineRef.current.style.left = leftPosition + 'px';
        lineRef.current.style.width = widthPosition + 'px';
        if (number == 1) {
            content1Ref.current.style.display = 'inline-block';
            content2Ref.current.style.display = 'none';
            content3Ref.current.style.display = 'none';
        }
        if (number == 2) {
            content2Ref.current.style.display = 'inline-block';
            content1Ref.current.style.display = 'none';
            content3Ref.current.style.display = 'none';
        }
        if (number == 3) {
            content3Ref.current.style.display = 'inline-block';
            content1Ref.current.style.display = 'none';
            content2Ref.current.style.display = 'none';
        }
        // switch (number) {
        //     case 1:
        //         content1Ref.current.style.display = 'inline-block';
        //         content2Ref.current.style.display = 'block';
        //         content3Ref.current.style.display = 'block';
        //         break;
        //     case 2:
        //         content2Ref.current.style.display = 'inline-block';
        //         content1Ref.current.style.display = 'block';
        //         content3Ref.current.style.display = 'block';
        //         break;
        //     case 3:
        //         content3Ref.current.style.display = 'inline-block';
        //         content1Ref.current.style.display = 'block';
        //         content2Ref.current.style.display = 'block';
        //         break;
        //     default:
        //         break;
        // }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('detail')}>
                <div className={cx('left')}>
                    <div className={cx('main')}>
                        <img src="https://bizweb.dktcdn.net/thumb/grande/100/505/077/products/layer3.jpg" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer3.jpg?v=1702350251907" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer2.jpg?v=1702350251907" />
                        </div>
                        <div className={cx('item')}>
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
                            <div className={cx('days')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
                            </div>
                            <div className={cx('hours')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
                            </div>
                            <div className={cx('minutes')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
                            </div>
                            <div className={cx('seconds')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
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
                                <div className={cx('title')}>Hotline 19006750 hỗ trợ từ 8h30 - 22h</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('description')}>
                <div className={cx('tabs')}>
                    <div onClick={(e) => handleTab(e, 1)} ref={tab1Ref} className={cx('tab', 'tab-1')}>
                        thông tin sản phẩm
                    </div>
                    <div onClick={(e) => handleTab(e, 2)} ref={tab2Ref} className={cx('tab', 'tab-2')}>
                        chính sách đổi trả
                    </div>
                    <div onClick={(e) => handleTab(e, 3)} ref={tab3Ref} className={cx('tab', 'tab-3')}>
                        đánh giá sản phẩm
                    </div>
                    <div ref={lineRef} className={cx('line')}></div>
                </div>
                <div className={cx('contents')}>
                    <div ref={content1Ref} className={cx('content', 'content-1')}>
                        Giới thiệu đôi giày Nike Air Jordan 14 Retro - sự kết hợp hoàn hảo giữa tốc độ vượt trội và
                        phong cách đẳng cấp. Đôi giày sneaker này sở hữu gam màu Light Ginger, Trắng và Đen tạo nên vẻ
                        ngoài táo bạo và độc đáo, thu hút sự chú ý bất kỳ nơi nào bạn đến. Được chế tạo với tinh tế và
                        sự chú ý đến từng chi tiết, đôi giày này có phần trên màu da lộn màu vàng với điểm nhấn màu đen,
                        tạo thêm độ sâu và sự tinh tế cho thiết kế. Đế trắng không chỉ phù hợp với gam màu mà còn mang
                        lại độ bám và độ bền vượt trội. Thiết kế cho sự thoải mái tối đa, Nike Air Jordan 14 Retro tích
                        hợp công nghệ đệm khí Air của Nike, mang đến sự đàn hồi và êm ái mỗi bước đi. Gối đệm cổ chân và
                        lưỡi gà đệm cung cấp sự hỗ trợ bổ sung cho mắt cá chân và giữ chân vững chắc, an toàn. Cho dù
                        bạn đang đi dạo trên phố hay thi đấu trên sân bóng rổ, đôi giày này được thiết kế để biểu diễn.
                        Vật liệu nhẹ và thoáng khí giúp giữ cho đôi chân mát mẻ và khô ráo, trong khi chất liệu chắc
                        chắn có thể chịu đựng những hoạt động gay gắt. Nổi bật khác biệt và thể hiện phong cách độc đáo
                        của bạn với đôi giày Nike Air Jordan 14 Retro. Sở hữu ngay đôi giày này và trải nghiệm sự kết
                        hợp hoàn hảo giữa thời trang và tính năng.
                    </div>
                    <div ref={content2Ref} className={cx('content', 'content-2')}>
                        + Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện + Nằm trong chính sách đổi trả sản
                        phẩm của Bean + Sản phẩm còn nguyên tem mác không bị rớt vỡ, vô nước + Thời gian đổi trả nhỏ hơn
                        15 ngày kể từ ngày nhận hàng + Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí
                        Điều kiện đổi trả hàng Điều kiện về thời gian đổi trả: trong vòng 07 ngày kể từ khi nhận được
                        hàng và phải liên hệ gọi ngay cho chúng tôi theo số điện thoại trên để được xác nhận đổi trả
                        hàng. Điều kiện đổi trả hàng: - Sản phẩm gửi lại phải còn nguyên đai nguyên kiện - Phiếu bảo
                        hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn. - Sản phẩm đổi/ trả phải còn đầy
                        đủ hộp, giấy hướng dẫn sử dụng và không bị trầy xước, bể. - Quý khách chịu chi phí vận chuyển,
                        đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương 10% giá trị đơn hàng.
                    </div>
                    <div ref={content3Ref} className={cx('content', 'content-3')}>
                        <div className={cx('bg')}>
                            <div className={cx('title')}>
                                Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho
                                sản phẩm này.
                            </div>
                            <button>Gửi đánh giá của bạn</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('types')}></div>
            <div className="rates"></div>
        </div>
    );
}

export default Left;
