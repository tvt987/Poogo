import classNames from 'classnames/bind';
import styles from './Test.module.scss';
import { useRef } from 'react';

const cx = classNames.bind(styles);
function Test() {
    const h2Ref = useRef();
    const handleClick = () => {
        h2Ref.current.classList.add(styles.active);
    };
    return (
        <h2 ref={h2Ref} onClick={() => handleClick()}>
            Click me!
        </h2>
    );
}

export default Test;
