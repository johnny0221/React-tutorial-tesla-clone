import React from 'react';
import { Wrap } from './styles/Wrap';
import { ItemText } from './styles/ItemText';
import { FlexColumn } from './styles/FlexColumn';
import { Button } from './styles/Button';

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <FlexColumn>
                <Button color='main'>Custom Order</Button>
                <Button color='white'>Existing Inventory</Button>
            </FlexColumn>
        </Wrap>
    );
}

export default Section;
