import React, { Component } from 'react';

import homeIcon from '../../assets/images/home.svg';
import giftIcon from '../../assets/images/gift.svg';
import hailocIcon from '../../assets/images/hailoc.svg';
import wheelIcon from '../../assets/images/wheel.png';

import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
    state = {
        menu: {
            home: {
                img: homeIcon,
                text: "Trang chủ",
                active: false
            },
            gift: {
                img: giftIcon,
                text: "Quà tặng phiên bản Tết",
                active: false
            },
            hailoc: {
                img: hailocIcon,
                text: "Hái lộc xuân tại quầy",
                active: false
            },
            wheel: {
                img: wheelIcon,
                text: "Vòng quay may mắn online",
                active: false
            },
        }
    }

    switchTabs = (input) => {
        const updatedState = { ...this.state.menu };
        const updatedActiveState = updatedState[input].active;
        this.setState({ [input]: updatedActiveState });
    }

    render() {
        return (
            <ul>
                <NavigationItem menuIcon={homeIcon} altMenuIcon="Trang chủ" menuText="Trang chủ" clickedToActivateTab={this.switchTabs.bind(this, "home")} />
                <NavigationItem menuIcon={giftIcon} altMenuIcon="Quà tặng phiên bản Tết" menuText="Quà tặng phiên bản Tết" />
                <NavigationItem menuIcon={hailocIcon} altMenuIcon="Hái lộc xuân tại quầy" menuText="Hái lộc xuân tại quầy" />
                <NavigationItem menuIcon={wheelIcon} altMenuIcon="Vòng quay may mắn online" menuText="Vòng quay may mắn online" />
            </ul>
        )
    }

}

export default NavigationItems;