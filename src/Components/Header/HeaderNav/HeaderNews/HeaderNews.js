import classNames from 'classnames/bind';
import styles from './HeaderNews.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(styles);
function HeaderNews() {
    const news = [
        {
            id: 1,
            content: 'Tin tức lv1',
            children: {},
            isChildren: false,
        },
        {
            id: 2,
            content: 'Tin tức lv1',
            children: {},
            isChildren: false,
        },
        {
            id: 3,
            content: 'Tin tức lv2',
            children: {
                title: 'Tin tức lv2',
                data: [
                    {
                        id: 1,
                        content: 'Tin tức lv1',
                        children: {},
                        isChildren: false,
                    },
                    {
                        id: 2,
                        content: 'Tin tức lv3',
                        children: {
                            title: 'Tin tức lv3',
                            data: [
                                {
                                    id: 1,
                                    content: 'Tin tức lv1',
                                    children: {},
                                    isChildren: false,
                                },
                                {
                                    id: 2,
                                    content: 'Tin tức lv1',
                                    children: {},
                                    isChildren: false,
                                },
                                {
                                    id: 3,
                                    content: 'Tin tức lv2',
                                    children: {},
                                    isChildren: false,
                                },
                            ],
                        },
                        isChildren: true,
                    },
                    {
                        id: 3,
                        content: 'Tin tức lv2',
                        children: {
                            title: 'Tin tức lv2',
                            data: [
                                {
                                    id: 1,
                                    content: 'Tin tức lv1',
                                },
                                {
                                    id: 2,
                                    content: 'Tin tức lv1',
                                },
                                {
                                    id: 3,
                                    content: 'Tin tức lv1',
                                },
                            ],
                        },
                        isChildren: true,
                    },
                ],
            },
            isChildren: true,
        },
    ];

    const [currentNew, setCurrentNew] = useState([...news]);
    const [currentTitle, setCurrentTitle] = useState('');
    const [history, setHistory] = useState([]);

    const handleNew = (children) => {
        setHistory([
            ...history,
            {
                currentNew,
                currentTitle,
            },
        ]);
        setCurrentNew(children.data);
        setCurrentTitle(children.title);
    };
    const handleBack = () => {
        let arrNew = history;
        setCurrentNew(arrNew[arrNew.length - 1].currentNew);
        setCurrentTitle(arrNew[arrNew.length - 1].currentTitle);
        arrNew.pop();
        setHistory(arrNew);
    };

    return (
        <div className={cx('news-content')}>
            <ul>
                <div className={cx('title')}>
                    {currentTitle && (
                        <i onClick={() => handleBack()}>
                            <FontAwesomeIcon className={cx('icon-back')} icon={faAngleLeft}></FontAwesomeIcon>
                        </i>
                    )}
                    {currentTitle}
                </div>
                {currentNew.map((item, index) => (
                    <li key={index} onClick={item.isChildren ? () => handleNew(item.children) : null}>
                        {item.content}
                        {item.isChildren && (
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleRight}></FontAwesomeIcon>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderNews;
