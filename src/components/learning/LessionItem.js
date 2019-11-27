import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Button, Body, ListItem, Text, Left, Right } from 'native-base';

export default LessionItem = (props) => {
    const { title, numQuestion, actived, unlocked, onPress } = props;
    const isActive = JSON.parse(actived);

    onPressHandler = () => {
        if (isActive || unlocked) 
            onPress();
    }

    renderIcon = () => {
        if (isActive || unlocked) return <Ionicons size={30} name="ios-checkmark" color="green" />
        return <Ionicons size={18} name="ios-lock" color="#666" />
    }

    renderRightContent = () => {
        return unlocked ?
            <Right style={[styles.rightWrapper]}>
                <Text style={styles.button}>Bắt đầu</Text>
            </Right> : null;

    }

    return (
        <ListItem style={styles.container} icon>
            <TouchableOpacity onPress={onPressHandler} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Left>
                    <Button style={{ backgroundColor: "#FF9501" }}>
                        {renderIcon()}
                    </Button>
                </Left>
                <Body style={styles.bodyWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{numQuestion} question</Text>
                </Body>
                {renderRightContent()}
            </TouchableOpacity>
        </ListItem>
    )
}

const heightItem = 65;
const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        height: heightItem,
        justifyContent: 'center',
        borderBottomWidth: 1
    },
    bodyWrapper: {
        borderBottomWidth: 0
    },
    rightWrapper: {
        borderBottomWidth: 0,
        height: heightItem,
        paddingRight: 0
    },
    title: {
        fontSize: 16,
        fontWeight: '600'
    },
    text: {
        fontSize: 13
    },
    button: {
        fontSize: 11,
        color: 'green',
        textTransform: 'uppercase',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 14
    }
})
