import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default InputForm = (props) => {
    const { name, type, onChangeText, placeholder, style, rounded } = props;
    let inputStyle = {
        borderRadius: rounded ? screenWidth * 0.06 : 0
    }

    onChangeTextHandler = (text) => {
        onChangeText(name, text);
    }

    return (
        <TextInput
            style={[ styles.input, inputStyle , style ]}
            secureTextEntry={ (type && type === 'password')  ? true : false }
            onChangeText={onChangeTextHandler}
            placeholder={placeholder}
            placeholderTextColor="#666"
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: screenWidth * 0.12,
        fontSize: 16,
        color: '#666',
        paddingHorizontal: 15,
        borderColor: "#ddd",
        borderWidth: 1
    }
})