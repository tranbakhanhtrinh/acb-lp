import React from 'react';
import classes from './HaiLoc.module.scss';

import reward from '../../../assets/images/reward.svg';

const haiLoc = () => (
    <div className={classes.HaiLoc}>
        <div className={classes.Content}>
            <div className={classes.Content__header}>
                <p>
                    TIẾT KIỆM ĐẦU NĂM, <span></span>
                    ĐÓN NGAY LỘC XUÂN
                </p>
            </div>
            <div className={classes.Content__body}>
                <ul>
                    <li>Khách hàng gửi tiết kiệm mới từ 20 triệu đồng/ tài khoản (*) được nhận tối đa 1 lần hái lộc/ tài khoản/ trong 1 ngày giao dịch.</li>

                    <li>KH nhận lượt tham gia hái Lộc ngay tại quầy để nhận lì xì như sau:</li>
                </ul>
            </div>
            <div className={classes.Content__ft}>
                <img src={reward} alt="Giải thưởng" />
            </div>
        </div>
    </div>
)

export default haiLoc;