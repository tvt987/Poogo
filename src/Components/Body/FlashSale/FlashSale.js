import classNames from 'classnames/bind';
import styles from './FlashSale.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoltIcon, DiscountIcon, FireIcon, StarIconR } from '~/Static/icons/icons';
import CountDown from './CountDown/CountDown';

const cx = classNames.bind(styles);

function FlashSale() {
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
                <div className={cx('item')}>
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer18cde9e508ba14790a6210491.jpg?v=1702350243257"></img>
                    <div className={cx('tag-new')}>
                        <FireIcon></FireIcon> Mới
                    </div>
                    <div className={cx('discount')}>
                        -21%
                        <span>
                            <DiscountIcon></DiscountIcon>
                        </span>
                    </div>
                    <div className={cx('product-color')}>
                        <div className={cx('item-color', 'item-color--red')}></div>
                        <div className={cx('item-color', 'item-color--blue')}></div>
                        <div className={cx('item-color', 'item-color--green')}></div>
                    </div>
                    <div className={cx('name')}>Giày nam Jordan Max Aura</div>
                    <div className={cx('price')}>
                        <div className={cx('price-new')}>3.200.000đ</div>
                        <div className={cx('price-old')}>4.500.000đ</div>
                    </div>
                    <div className={cx('count-item')}>
                        <div className={cx('count-down')}></div>
                        <div className={cx('quantity-sold')}>
                            Đã bán:
                            <span> 80 sản phẩm</span>
                        </div>
                    </div>
                    <div className={cx('stars')}>
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer16fd25363242141afa734215a.jpg?v=1702350246057"></img>
                    <div className={cx('tag-new')}>
                        <FireIcon></FireIcon> Mới
                    </div>
                    <div className={cx('discount')}>
                        -21%
                        <span>
                            <DiscountIcon></DiscountIcon>
                        </span>
                    </div>
                    <div className={cx('product-color')}>
                        <div className={cx('item-color', 'item-color--red')}></div>
                        <div className={cx('item-color', 'item-color--blue')}></div>
                        <div className={cx('item-color', 'item-color--green')}></div>
                    </div>
                    <div className={cx('name')}>Giày nam Jordan Max Aura</div>
                    <div className={cx('price')}>
                        <div className={cx('price-new')}>3.200.000đ</div>
                        <div className={cx('price-old')}>4.500.000đ</div>
                    </div>
                    <div className={cx('count-item')}>
                        <div className={cx('count-down')}></div>
                        <div className={cx('quantity-sold')}>
                            Đã bán:
                            <span> 80 sản phẩm</span>
                        </div>
                    </div>
                    <div className={cx('stars')}>
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer1d87b62817a694e059205f86f.jpg?v=1702350240540"></img>
                    <div className={cx('tag-new')}>
                        <FireIcon></FireIcon> Mới
                    </div>
                    <div className={cx('discount')}>
                        -21%
                        <span>
                            <DiscountIcon></DiscountIcon>
                        </span>
                    </div>
                    <div className={cx('product-color')}>
                        <div className={cx('item-color', 'item-color--red')}></div>
                        <div className={cx('item-color', 'item-color--blue')}></div>
                        <div className={cx('item-color', 'item-color--green')}></div>
                    </div>
                    <div className={cx('name')}>Giày nam Jordan Max Aura</div>
                    <div className={cx('price')}>
                        <div className={cx('price-new')}>3.200.000đ</div>
                        <div className={cx('price-old')}>4.500.000đ</div>
                    </div>
                    <div className={cx('count-item')}>
                        <div className={cx('count-down')}></div>
                        <div className={cx('quantity-sold')}>
                            Đã bán:
                            <span> 80 sản phẩm</span>
                        </div>
                    </div>
                    <div className={cx('stars')}>
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer112344afd2dbe4842b4562af5.jpg?v=1702350247140"></img>
                    <div className={cx('tag-new')}>
                        <FireIcon></FireIcon> Mới
                    </div>
                    <div className={cx('discount')}>
                        -21%
                        <span>
                            <DiscountIcon></DiscountIcon>
                        </span>
                    </div>
                    <div className={cx('product-color')}>
                        <div className={cx('item-color', 'item-color--red')}></div>
                        <div className={cx('item-color', 'item-color--blue')}></div>
                        <div className={cx('item-color', 'item-color--green')}></div>
                    </div>
                    <div className={cx('name')}>Giày nam Jordan Max Aura</div>
                    <div className={cx('price')}>
                        <div className={cx('price-new')}>3.200.000đ</div>
                        <div className={cx('price-old')}>4.500.000đ</div>
                    </div>
                    <div className={cx('count-item')}>
                        <div className={cx('count-down')}></div>
                        <div className={cx('quantity-sold')}>
                            Đã bán:
                            <span> 80 sản phẩm</span>
                        </div>
                    </div>
                    <div className={cx('stars')}>
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>&nbsp;
                        <StarIconR></StarIconR>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;
