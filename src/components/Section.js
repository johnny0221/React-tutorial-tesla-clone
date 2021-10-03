import React from 'react';
import { Wrap } from './styles/Wrap';
import { ItemText } from './styles/ItemText';
import { FlexColumn } from './styles/FlexColumn';
import { Flex } from './styles/Flex';
import { Button } from './styles/Button';
import { DownArrow } from './styles/DownArrow';
import Fade from 'react-reveal/Fade';

const Section = ({title, description, backgroundImg, leftBtnText, rightBtnText}) => {
    return (
        <Wrap backgroundImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
                <FlexColumn>
                    <Flex justify="space-between">
                        { leftBtnText && <Button color='main'>{leftBtnText}</Button> }
                        { rightBtnText && <Button color='white'>{rightBtnText}</Button> }
                    </Flex>
                    <DownArrow src="/images/down-arrow.svg" />
                </FlexColumn>
            </Fade>
        </Wrap>
    );
}

export default Section;
