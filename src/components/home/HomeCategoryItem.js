import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';

const itemWidth = Dimensions.get('window').width / 2;
export default HomeCategoryItem = (props) => {
    const { image, title } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Card style={styles.wrapper}>
                <ImageBackground
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={styles.body}
                />
                <Text style={styles.title}>{ title }</Text>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: itemWidth,
        padding: 5
    },
    wrapper: {
        flex: 1,
        height: itemWidth / 4 * 3,
        borderRadius: 8,
        overflow: 'hidden'
    },
    body: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ddd'
    }
})
