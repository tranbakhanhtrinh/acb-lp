import React, { Component, lazy, Suspense } from 'react';

import logo from './assets/images/logo.svg';
import homeIcon from './assets/images/home.svg';
import giftIcon from './assets/images/gift.svg';
import hailocIcon from './assets/images/hailoc.svg';
import wheelIcon from './assets/images/wheel.png';
import homeIconActive from './assets/images/home-active.svg';
import giftIconActive from './assets/images/gift-active.svg';
import hailocIconActive from './assets/images/hailoc-active.svg';
import wheelIconActive from './assets/images/wheel-active.png';
import fb from './assets/images/fb.svg';
import yt from './assets/images/yt.svg';
import callIcon from './assets/images/call.svg';

import classes from './App.module.scss';

// import SideBar from './components/SideBar/SideBar';
// import TabContent from './components/TabContent/TabContent';
// import Logo from './components/SideBar/Logo/Logo'
// import Menu from './components/SideBar/Menu/Menu';
// import NavigationItem from './components/NavigationItem/NavigationItem';

const Logo = lazy(() => import('./components/SideBar/Logo/Logo'))
const SideBar = lazy(() => import('./components/SideBar/SideBar'));
const TabContent = lazy(() => import('./components/TabContent/TabContent'));
const Menu = lazy(() => import('./components/SideBar/Menu/Menu'));
const NavigationItem = lazy(() => import('./components/NavigationItem/NavigationItem'));
const TabButtons = lazy(() => import('./components/SideBar/Menu/TabButtons/TabButtons'));
const Social = lazy(() => import('./components/Social/Social'));
const Home = lazy(() => import('./components/TabContent/Home/Home'));
const Gift = lazy(() => import('./components/TabContent/Gift/Gift'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [
                {
                    id: '1',
                    menuIcon: homeIcon,
                    menuIconActive: homeIconActive,
                    altMenuIcon: 'Trang chủ',
                    menuText: 'Trang chủ'
                },
                {
                    id: '2',
                    menuIcon: giftIcon,
                    menuIconActive: giftIconActive,
                    altMenuIcon: 'Quà tặng phiên bản Tết',
                    menuText: 'Quà tặng phiên bản Tết'
                },
                {
                    id: '3',
                    menuIcon: hailocIcon,
                    menuIconActive: hailocIconActive,
                    altMenuIcon: 'Hái lộc xuân tại quầy',
                    menuText: 'Hái lộc xuân tại quầy'
                },
                {
                    id: '4',
                    menuIcon: wheelIcon,
                    menuIconActive: wheelIconActive,
                    altMenuIcon: 'Vòng quay may mắn online',
                    menuText: 'Vòng quay may mắn online'
                },
            ],
            isActive: '1',
            hoverActive: false
        }
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOut = this.hoverOut.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isActive !== nextState.isActive) {
            return true;
        }
        return false;
    }
    // componentDidUpdate() {
    //     console.log("test update");
    // }
    // componentDidMount() {
    //     console.log("test");
    // }
    hoverOn = (e, inputId) => {
        const list = [...this.state.tab];
        const updateMenuIcon = list[parseInt(inputId) - 1].menuIconActive;
        e.target.style.backgroundImage = `url(${updateMenuIcon})`;
    }
    hoverOut = (e, inputId) => {
        const list = [...this.state.tab];
        const updateMenuIcon = list[parseInt(inputId) - 1].menuIcon;
        if (this.state.isActive !== inputId) {
            e.target.style.backgroundImage = `url(${updateMenuIcon})`;
        }
    }
    changeActive = e => {
        this.setState({ isActive: e.target.getAttribute("data-tab") })
    }
    render() {
        const tabTitle = this.state.tab.map(tab => {
            return (
                <NavigationItem
                    key={tab.id}
                    style={{ backgroundImage: `url(${this.state.isActive === tab.id ? tab.menuIconActive : tab.menuIcon})`, backgroundSize: "25px", backgroundRepeat: "no-repeat", backgroundPosition: "15px 18px" }}
                    isActive={this.state.isActive}
                    dataTab={tab.id}
                    hoverOn={e => this.hoverOn(e, tab.id)}
                    hoverOut={e => this.hoverOut(e, tab.id)}
                    menuText={tab.menuText}
                    clickedToActivateTab={this.changeActive} />
            )
        })
        let cpn = [<Home />, <Gift />, <Logo imgSrc={logo} alt="logo" />, "Wheel"]
        const tabContent = this.state.tab.map(item => {
            return (
                this.state.isActive === item.id && <TabContent key={parseInt(item.id) * Math.random()} dataTab={item.id} content={cpn[parseInt(item.id) - 1]} />
            )
        })
        return (
            <div className="App">
                <Suspense fallback={<div>...Loading...</div>}>
                    <SideBar>
                        <Logo imgSrc={logo} alt="logo" />
                        <Menu>
                            <TabButtons>
                                {tabTitle}
                            </TabButtons>
                            <div className={classes.SocialSection}>
                                <Social href="https://www.facebook.com/NganHangACB" target="_blank" src={fb} alt="Facebook" />
                                <Social href="https://www.youtube.com/channel/UCmHyuC-eNeCGn7bf64Nt66Q" target="_blank" src={yt} alt="Youtube" />
                                <Social href="tel:1900545486" target="" src={callIcon} alt="Phone" />
                            </div>
                        </Menu>
                    </SideBar>
                    {tabContent}
                </Suspense>
            </div>
        );
    }
}

export default App;
