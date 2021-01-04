import React from 'react';
import classes from './Gift.module.scss';

import giftSmall from '../../../assets/images/gift_small.svg';
import qua from '../../../assets/images/qua.svg';

const gift = () => (
    <div className={classes.Gift}>
        <div className={classes.Content}>
            <div className={classes.Content__header}>
                <p>
                    Quà tặng được ACB thiết kế
                </p>
                <div className={classes.Slogan2AndImg}>
                    <p>
                        hình ảnh khác biệt
                    </p>
                    <img src={giftSmall} alt="Small Gift" />
                </div>
                <p className={classes.Content__header__desc}>
                    Với bộ sưu tập quà phiên bản thiết kế đặc biệt, ACB mong muốn cùng khách hàng lan tỏa thông điệp sống tích cực, đón một năm mới <strong>TÀI LỘC & BÌNH AN</strong>.
                </p>
            </div>
            <div className={classes.Content__body}>
                <div className={classes.Content__body__blueDiv}>
                    <p>
                        Đa dạng kỳ hạn gửi tiền
                        <span>Từ 1 tháng trở lên để tham gia nhận quà phiên Bản Tết</span>
                    </p>
                </div>
                <p className={classes.Content__body__desc}>
                    Khách hàng tham gia nhận tối đa <span>1 phần quà/tài khoản/ trong 1 ngày giao dịch.</span>
                </p>
            </div>
            <div className={classes.Content__ft}>
                <div className={classes.Content__ft__hd}>
                    Đa dạng sản phẩm để Bạn lựa chọn
                </div>
                <ul className={classes.Content__ft__list}>
                    <li>Tiết kiệm Truyền thống kỳ hạn từ 1 tháng trở lên</li>
                    <li>Tiết kiệm Phúc An Lộc kỳ hạn từ 1 tháng trở lên</li>
                    <li>Tiết kiệm Đại Lộc kỳ hạn từ 6 tháng trở lên</li>
                    <li>Tích lũy Thiên Thần Nhỏ, Thành Tài, An Cư Lập Nghiệp, Tương lai</li>
                    <li>Tiền gửi có kỳ hạn từ 1 tháng trở lên</li>
                    <li>Gói Gia Đình Việt (tiền gửi tiết kiệm theo gói)</li>

                </ul>
            </div>
        </div>
        <img src={qua} alt="Quà tặng" className={classes.gift} />
    </div>
)

export default gift;