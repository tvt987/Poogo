import classNames from 'classnames/bind';
import styles from './FlashSale.module.scss';
import { BoltIcon, DiscountIcon, FireIcon, HeartIcon, NextIcon, PrevIcon, StarIconR } from '~/Static/icons/icons';
import { useEffect, useRef, useState } from 'react';
import CountDown from './CountDown/CountDown';
import Product from '../Product/Product';

const cx = classNames.bind(styles);

function FlashSale() {
    const [direction, setDirection] = useState('next'); // Thêm biến trạng thái để theo dõi hướng dịch chuyển
    const productRef = useRef();
    const [totalChilren, setTotalChildren] = useState(0);
    const [percent, setPercent] = useState(0);
    const [currentPercent, setCurrentPercent] = useState(0);
    useEffect(() => {
        if (productRef.current) {
            const childrenCount = productRef.current.children.length;
            setTotalChildren(childrenCount);
            setPercent(100 / childrenCount);
            if (direction === 'prev' && currentPercent > 0) {
                setCurrentPercent(-(totalChilren - 4) * percent);
            }
        }
    }, [percent, direction, currentPercent]);

    const handleNext = () => {
        setDirection('next'); // Đặt hướng dịch chuyển là "next"
        const newPercent = currentPercent - percent;
        if (newPercent < -(totalChilren - 4) * percent) {
            setCurrentPercent(0);
        } else {
            setCurrentPercent(newPercent);
        }
        productRef.current.style.transform = `translateX(${newPercent}%)`;
    };

    const handlePrev = () => {
        setDirection('prev'); // Đặt hướng dịch chuyển là "prev"
        const newPercent = currentPercent + percent;
        if (newPercent > 0) {
            setCurrentPercent(-(totalChilren - 4) * percent);
        } else {
            setCurrentPercent(newPercent);
        }
        productRef.current.style.transform = `translateX(${newPercent}%)`;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>deal cực hấp dẫn</div>
                <div className={cx('time')}>
                    <span className={cx('icon-bolt')}>
                        <BoltIcon></BoltIcon>
                    </span>
                    <div className={cx('day')}>
                        <CountDown value="278" time="NGÀY"></CountDown>
                    </div>
                    <div className={cx('hours')}>
                        <CountDown value="1" time="GIỜ"></CountDown>
                    </div>
                    <div className={cx('minutes')}>
                        <CountDown value="52" time="PHÚT"></CountDown>
                    </div>
                    <div className={cx('seconds')}>
                        <CountDown value="41" time="GIÂY"></CountDown>
                    </div>
                    <span className={cx('icon-bolt')}>
                        <BoltIcon></BoltIcon>
                    </span>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('wrapper-title')}>
                    <div className={cx('title')}>
                        <p>Chương trình giảm giá</p>
                        <h2>Nhanh tay kẻo lỡ</h2>
                    </div>
                </div>

                <div className={cx('products')}>
                    <div onClick={() => handleNext()} className={cx('next')}>
                        <NextIcon></NextIcon>
                    </div>
                    <div onClick={() => handlePrev()} className={cx('prev')}>
                        <PrevIcon></PrevIcon>
                    </div>
                    <div ref={productRef} className={cx('products-list')}>
                        <Product content="1"></Product>
                        <Product content="2"></Product>
                        <Product content="3"></Product>
                        <Product content="4"></Product>
                        <Product content="5"></Product>
                        <Product content="6"></Product>
                        <Product content="7"></Product>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;

/* 
    cách 1: phải lấy được tổng theo bội số 4
        vd có 7 item
            7/4 = 1 cộng thêm một nữa ( điều kiện này cần check xem nó có dư không )
            8/4 = 2 thì không cần cộng thêm ( điều kiện này cần check xem nó có dư không )
            thì sẽ tính ra được tổng số trang


    cách 2: cứ click vào button thì sẽ set translateX 
        Nếu max thì (điều 

    cách 3: 
            Tính tổng children. VD: 7 từ đó tính ra % của mỗi item
            Rồi cứ mỗi lần click button thì translate nếu max(100%) về 0, nếu 0 lên max(100%)

*/
