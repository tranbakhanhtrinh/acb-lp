import React from 'react';

import classes from './Wheel.module.scss';
import wheelReward from '../../../assets/images/wheel_reward.svg';

const wheel = () => (
    <div className={classes.Wheel}>
        <div className={classes.Content}>
            <div className={classes.Content__header}>
                <p>
                    <span className={classes.Millionaire}>Trở thành Triệu Phú</span> <span className={classes.break}></span>
                    với giải thưởng 100 triệu VND <span className={classes.break}></span>
                    hoặc sở hữu quà tặng công nghệ
                </p>
            </div>
            <div className={classes.Content__body}>
                <ul>
                    <li>Gửi mới tiền gửi online kỳ hạn 1 tháng trở lên từ 10 triệu VND.</li>
                    <li>Nhận tiền quốc tế (báo có) từ 230,000,000 VND trở lên.</li>
                    <li>Chuyển tiền đi quốc tế: áp dụng tất cả các Khách hàng  có phát sinh thanh toán quốc tế.</li>
                    <li>Tài Khoản Sinh Viên: Khách hàng nhận tiền gửi vào Tài Khoản Sinh Viên từ 1 triệu đồng trở lên/lần.</li>
                    <li>Gói Gia Đình Việt: Thành viên chính giới thiệu thành viên phụ mới tham gia Gia Đình Việt.</li>
                </ul>
            </div>
            <div className={classes.Content__ft}>
                <img src={wheelReward} alt="Giải thưởng" />
            </div>
        </div>
    </div>
)

export default wheel;