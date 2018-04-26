import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const Gnb = () => {
    return (
        <Container>
            <Menu>
                <Menu.Item as={NavLink} to='/' exact>홈</Menu.Item>
                <Menu.Item as={NavLink} to='/ManageGroup'>그룹관리</Menu.Item>
                <Menu.Item as={NavLink} to='/ManagePerson'>인사관리</Menu.Item>
                <Menu.Item as={NavLink} to='/ManageId'>계정관리</Menu.Item>
            </Menu>
            {/*
            <ul>
                <li><NavLink to="/">홈</NavLink></li>
                <li><NavLink to="/ManageGroup">그룹관리</NavLink></li>
                <li><NavLink to="/ManagePerson">인사관리</NavLink></li>
                <li><NavLink to="/ManageId">계정관리</NavLink></li>
                <li><Link to="/about/foo">About Foo</Link></li>
            </ul>
            */}
        </Container>
    );
};

export default Gnb;