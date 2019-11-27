import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width - 10;
export default HomeCourseItem = (props) => {
    const { imageUri } = props;
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    source={{ uri: imageUri }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        padding: 5
    },
    wrapper: {
        width: '100%',
        height: '100%',
        borderRadius: screenWidth / 2,
        borderColor: '#888',
        borderWidth: 2,
        overflow: 'hidden',
        padding: 5
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
