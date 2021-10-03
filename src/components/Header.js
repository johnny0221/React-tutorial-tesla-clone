import React, { useState } from 'react';
import { HeaderContainer } from './styles/HeaderContainer';
import { Menu } from './styles/Menu';
import { RightMenu } from './styles/RightMenu';
import { CustomMenu } from './styles/CustomMenu';
import { BurgerNav } from './styles/BurgerNav';
import { CustomClose } from './styles/CustomClose';
import { Flex } from './styles/Flex';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {

    const [burgerState, setBurgerState] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <HeaderContainer>
            <a href="#">
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                { cars && cars.map((car, i) => <a href="#" key={i}>{car}</a> )}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerState(true)} />
            </RightMenu>
            <BurgerNav show={burgerState}>
                <Flex justify='flex-end'>
                    <CustomClose onClick={() => setBurgerState(false)} />
                </Flex>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade in</a></li>
                <li><a href="#">Cyber truck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </HeaderContainer>
    );
}

export default Header;
