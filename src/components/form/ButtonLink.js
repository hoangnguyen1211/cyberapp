import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default ButtonLink = (props) => {
    const { style, title, onPress } = props;

    onPressHandler = () => {
        onPress();
    }

    return (
        <TouchableOpacity onPress={onPressHandler} >
            <Text 
                style={[ styles.button, style ]}>
                { title ? title : props.children }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 16
    }
})
