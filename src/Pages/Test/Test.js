import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Test.module.scss';

const cx = classNames.bind(styles);

const HoverImage = ({
    src = 'https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category2.jpg?1708418149368',
    alt,
}) => {
    const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top } = e.target.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setHoverPos({ x, y });
    };

    return (
        <div className={cx('image-container')} onMouseMove={handleMouseMove}>
            <img src={src} alt={alt} className={cx('main-image')} />
            <div
                className={cx('hover-box')}
                style={{
                    top: hoverPos.y - 100,
                    left: hoverPos.x - 100,
                }}
            ></div>
            <div
                className={cx('preview-box')}
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: `${-hoverPos.x}px ${-hoverPos.y}px`,
                }}
            ></div>
        </div>
    );
};

export default HoverImage;
