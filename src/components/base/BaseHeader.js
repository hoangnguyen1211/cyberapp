import React from 'react';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HorizontalGradient from './HorizontalGradient';

export default BaseHeader = (props) => {
    const { title, onGoBack } = props;

    onGoBackHandler = () => {
        onGoBack();
    }

    leftContent = () => {
        return onGoBack ? <Button transparent onPress={onGoBackHandler}>
            <Ionicons size={25} name='ios-arrow-back' />
        </Button> : <Button transparent></Button>;
    }

    return (
        <HorizontalGradient>
            <Header transparent >
                <Left>{leftContent()}</Left>
                <Body>
                    <Title>{ title }</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Ionicons size={25} name='ios-search' />
                    </Button>
                    <Button transparent>
                        <Ionicons size={25} name='ios-notifications-outline' />
                    </Button>
                </Right>
            </Header>
        </HorizontalGradient>
    )
}
