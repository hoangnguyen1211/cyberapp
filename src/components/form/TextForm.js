import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default TextForm = (props) => {
    const { style } = props;
    return (
        <Text style={[ styles.container, style ]}>
            { props.children }
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 16
    }
})
