import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ImageHover.module.scss';

const cx = classNames.bind(styles);

function ImageHover({ link }) {
    const imgRef = useRef(null);
    const lensRef = useRef(null);
    const resultRef = useRef(null);
    const containerRef = useRef(null);
    const [scale, setScale] = useState(3.5);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleLens = (e) => {
        const img = imgRef.current;
        const lens = lensRef.current;
        const result = resultRef.current;

        const pos = getCursorPos(e, img);
        let newX = pos.x - lens.offsetWidth / 2;
        let newY = pos.y - lens.offsetHeight / 2;

        if (newX > img.width - lens.offsetWidth) newX = img.width - lens.offsetWidth;
        if (newX < 0) newX = 0;
        if (newY > img.height - lens.offsetHeight) newY = img.height - lens.offsetHeight;
        if (newY < 0) newY = 0;

        setX(newX);
        setY(newY);

        lens.style.left = `${newX}px`;
        lens.style.top = `${newY}px`;

        result.style.backgroundPosition = `-${newX * scale}px -${newY * scale}px`;
    };

    const moveLens = (e) => {
        e.preventDefault();
        handleLens(e);
    };

    const getCursorPos = (e, img) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        return { x, y };
    };

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const newScale = Math.max(1, scale + (e.deltaY < 0 ? 0.35 : -0.35));
            setScale(newScale);

            const lens = lensRef.current;
            const result = resultRef.current;

            lens.style.width = `${100 * (3.5 / newScale)}px`;
            lens.style.height = `${100 * (3.5 / newScale)}px`;
            result.style.backgroundSize = `${newScale * 100}%`;

            result.style.backgroundPosition = `-${x * newScale}px -${y * newScale}px`;
        };

        const container = containerRef.current;
        container.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleScroll);
        };
    }, [scale, x, y]);

    const handleImageLoad = () => {
        const result = resultRef.current;
        result.style.backgroundImage = `url('${link}')`;
    };

    return (
        <div className={cx('container')} ref={containerRef}>
            <div className={cx('image-container', 'div1')} onMouseMove={moveLens}>
                <img src={link} alt="Error" ref={imgRef} onLoad={handleImageLoad} />
                <div className={cx('zoom-lens')} ref={lensRef}></div>
            </div>
            <div className={cx('zoom-result', 'div2')} ref={resultRef}></div>
        </div>
    );
}

export default ImageHover;
