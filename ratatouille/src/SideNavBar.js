import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {useNavigate} from 'react-router-dom';

function SideNavBar() {
    const navigate = useNavigate();
    return <SideNav
        onSelect={(selected) => {
            console.log(selected);
            navigate('/'+selected);
        }}
        className = 'sideNavBar'
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey = "home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText> Home </NavText>
                </NavItem>
                <NavItem eventKey = "profile">
                    <NavIcon>
                        <i className="fa fa-solid fa-user" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText> Profile </NavText>
                </NavItem>
                <NavItem eventKey = "lessons">
                    <NavIcon>
                        <i className="fa fa-fw fa-solid fa-bars-progress" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText> Lessons </NavText>
                </NavItem>
                <NavItem eventKey = "ratatouillify">
                    <NavIcon>
                        <i className="fa fa-solid fa-wand-magic-sparkles" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText> Ratatouillify </NavText>
                </NavItem>
                <NavItem eventKey = "search" >
                    <NavIcon>
                        <i className="fa fa-fw fa-magnifying-glass" style={{ fontSize: '2em' }} />
                    </NavIcon>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
}

export default SideNavBar;