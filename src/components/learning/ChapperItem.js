import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Button, Body, ListItem, Text, Left, Right } from 'native-base';
import LessionItem from './LessionItem';

export default ChapperItem = (props) => {
    const { id, title, actived, lessons, onPress } = props;
    const [selected, setSelected] = useState(actived);

    onSetSelected = () => {
        setSelected(!selected);
    }

    onPressHandler = () => {
        onPress();
    }

    renderRightContent = () => {
        return actived ?
            <Text style={styles.button}>Tiếp tục</Text> : null;
    }

    return (
        <View>
            <ListItem style={styles.container} icon>
                <TouchableOpacity onPress={onSetSelected} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Left>
                        <Ionicons size={22} name="ios-paper" color="#666" />
                    </Left>
                    <Body style={styles.bodyWrapper}>
                        <Text style={styles.title}>{title}</Text>
                    </Body>
                    <Right style={[styles.rightWrapper]}>
                        {renderRightContent()}
                    </Right>
                </TouchableOpacity>
            </ListItem>
            <View style={{ paddingHorizontal: 10, display: selected ? 'flex' : 'none' }}>
                {
                    lessons.map((item, index) => {
                        return <LessionItem
                            key={index}
                            title={item.title}
                            numQuestion={item.numQuestion}
                            actived={item.isActive}
                            onPress={onPressHandler}
                        />
                    })
                }
            </View>
        </View>
    )
}

const heightItem = 70;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginLeft: 0,
        height: heightItem,
        justifyContent: 'center',
        borderBottomWidth: 1,
        backgroundColor: '#f2f2f2'
    },
    bodyWrapper: {
        borderBottomWidth: 0,
        marginLeft: -5
    },
    rightWrapper: {
        borderBottomWidth: 0,
        height: heightItem,
        paddingRight: 0
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
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
