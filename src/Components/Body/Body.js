import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import { useEffect, useRef, useState } from 'react';
import { CircleIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function Body() {
    let dots = [];
    const slideRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    let total = 0;
    if (slideRef.current) {
        total = slideRef.current.children.length;
    }

    useEffect(() => {
        const totalSlides = slideRef.current ? slideRef.current.children.length : 0;
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (slideRef.current) {
            const offset = -currentSlide * 100;
            slideRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [currentSlide]);

    function prevSlide() {
        setCurrentSlide((prevSlide) => {
            if (prevSlide == 0) {
                return total - 1;
            }
            return (prevSlide - 1) % total;
        });
    }

    function nextSlide() {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % total);
    }
    if (slideRef.current) {
        dots = [];
        for (var i = 0; i < total; i++) {
            if (currentSlide == i) {
                dots.push(
                    <div key={i} className={cx('wrapper-circle', 'active')}>
                        <i>
                            <CircleIcon></CircleIcon>
                        </i>
                    </div>,
                );
            } else {
                dots.push(
                    <div key={i} className={cx('wrapper-circle')}>
                        <i>
                            <CircleIcon></CircleIcon>
                        </i>
                    </div>,
                );
            }
        }
    }
    return (
        <div>
            <div className={cx('carousel-1')}>
                <div ref={slideRef} className={cx('slides')}>
                    <div className={cx('slide')}>
                        <img
                            src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/slider_1.png?1708418149368"
                            alt="Image 1"
                        />
                    </div>
                    <div className={cx('slide')}>
                        <img
                            src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/slider_2.png?1708418149368"
                            alt="Image 2"
                        />
                    </div>
                    <div className={cx('slide')}>
                        <img
                            src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/slider_1.png?1708418149368"
                            alt="Image 1"
                        />
                    </div>
                </div>
                <button className={cx('prev')} onClick={prevSlide}>
                    &#10094;
                </button>
                <button className={cx('next')} onClick={nextSlide}>
                    &#10095;
                </button>
                <div className={cx('dots')}>{dots.map((item) => item)}</div>
            </div>
            <div className={cx('carousel-2')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>Toàn bộ sản phẩm đều là chính hãng</div>
                    <div className={cx('list-products')}>DANH MỤC SẢN PHẨM</div>
                </div>
                <div className={cx('gallery')}>
                    <a className={cx('gallery-item')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category1.jpg?1708418149368" />
                        <div className={cx('caption')}>Chạy bộ</div>
                    </a>
                    <a className={cx('gallery-item')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category2.jpg?1708418149368" />
                        <div className={cx('caption')}>Leo núi</div>
                    </a>
                    <a className={cx('gallery-item')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category3.jpg?1708418149368" />
                        <div className={cx('caption')}>Quần vợt</div>
                    </a>
                    <a className={cx('gallery-item')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category4.jpg?1708418149368" />
                        <div className={cx('caption')}>Giày bóng rổ</div>
                    </a>
                </div>
                <marquee className={cx('slide-1')} behavior="scroll" direction="left" scrollamount="20">
                    <span>Tặng quà trên mỗi đơn hàng từ 500k</span>
                    <span>Giảm 15% cho đơn hàng đầu tiên từ 699k</span>
                    <span>Miễn phí vận chuyển từ đơn hàng 599k</span>
                    <span>Đổi hàng trong 30 ngày</span>
                    <span>Tặng quà trên mỗi đơn hàng từ 500k</span>
                    <span>Giảm 15% cho đơn hàng đầu tiên từ 699k</span>
                    <span>Miễn phí vận chuyển từ đơn hàng 599k</span>
                    <span>Đổi hàng trong 30 ngày</span>
                    <span>Tặng quà trên mỗi đơn hàng từ 500k</span>
                    <span>Giảm 15% cho đơn hàng đầu tiên từ 699k</span>
                    <span>Miễn phí vận chuyển từ đơn hàng 599k</span>
                    <span>Đổi hàng trong 30 ngày</span>
                </marquee>
            </div>
        </div>
    );
}

export default Body;
