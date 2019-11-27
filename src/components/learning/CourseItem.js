import React, { Fragment } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const itemWidth = Dimensions.get('window').width / 2;
export default CourseItem = (props) => {
    const { image, title, actived, onPress } = props;

    renderContent = () => {
        if (actived) return <Text style={styles.title}>{title}</Text>
        return <Fragment>
            <Ionicons size={30} color="#fff" name='ios-lock' />
            <Text style={styles.title}>{title}</Text>
        </Fragment>
    }

    onPressHandler = () => {
        if(actived){
            onPress();
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <View style={styles.wrapper}>
                <Image
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={styles.image}
                />
                <View style={[ styles.overlay, { backgroundColor : actived ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.4)' } ]}>
                    { renderContent() }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: itemWidth,
        height: itemWidth,
        padding: 5
    },
    wrapper: {
        flex: 1,
        borderRadius: itemWidth / 2,
        overflow: 'hidden',
        position: 'relative'
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 5,
        paddingVertical: 2
    },
    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})
