import React, { Component } from 'react';

import logo from './assets/images/logo.svg';
import homeIcon from './assets/images/home.svg';
import giftIcon from './assets/images/gift.svg';
import hailocIcon from './assets/images/hailoc.svg';
import wheelIcon from './assets/images/wheel.png';

import SideBar from './components/SideBar/SideBar';
import TabContent from './components/TabContent/TabContent';
import Logo from './components/SideBar/Logo/Logo';
import Menu from './components/SideBar/Menu/Menu';
import NavigationItem from './components/NavigationItems/NavigationItem/NavigationItem';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [
                {
                    id: 1,
                    menuIcon: homeIcon,
                    altMenuIcon: 'Trang chủ',
                    menuText: 'Trang chủ'
                },
                {
                    id: 2,
                    menuIcon: giftIcon,
                    altMenuIcon: 'Quà tặng phiên bản Tết',
                    menuText: 'Quà tặng phiên bản Tết'
                },
                {
                    id: 3,
                    menuIcon: hailocIcon,
                    altMenuIcon: 'Hái lộc xuân tại quầy',
                    menuText: 'Hái lộc xuân tại quầy'
                },
                {
                    id: 4,
                    menuIcon: wheelIcon,
                    altMenuIcon: 'Vòng quay may mắn online',
                    menuText: 'Vòng quay may mắn online'
                },
            ]
        }
    }
    render() {
        const tabTitle = this.state.tab.map(tab => {
            return (
                <NavigationItem menuIcon={tab.menuIcon} altMenuIcon={tab.altMenuIcon} menuText={tab.menuText} />
            )
        })
        return (
            <div className="d-flex">
                <SideBar>
                    <Logo imgSrc={logo} alt="logo" />
                    <Menu>
                        {tabTitle}
                    </Menu>
                </SideBar>
                <TabContent content="fwejofwe" />
            </div>
        );
    }
}

export default App;
