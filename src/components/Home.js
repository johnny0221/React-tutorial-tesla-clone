import React from 'react';
import Section from './Section';
import { Container } from './styles/Container';

const Home = () => {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order online for touchless delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model Y"
            description="Order online for touchless delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model 3"
            description="Order online for touchless delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model X"
            description="Order online for touchless delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Lowest Cost Solar Panels in the US"
            description="Money back guaruntee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="learn more"
            />
            <Section 
            title="Solar For New Roofs"
            description="Solar Roof Costs Less"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="learn more"
            />
            <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="learn more"
            />
        </Container>
    );
}

export default Home;
