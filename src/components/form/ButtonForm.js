import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { HorizontalGradient } from '../base';

const screenWidth = Dimensions.get('window').width;
export default ButtonForm = (props) => {
    const { title, titleStyle, style, rounded, colors, onPress } = props;
    let buttonStyle = {
        borderRadius: rounded ? screenWidth * 0.06 : 0
    }

    onPressHandler = () => {
        onPress();
    }

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <HorizontalGradient 
                style={[ styles.buttonContainer, buttonStyle, style ]}
                colors={colors}
            >
                <Text style={[ 
                        styles.title,
                        titleStyle
                    ]}
                >
                    { title ? title : props.children }
                </Text>
            </HorizontalGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: screenWidth * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: '#fff'
    }
})