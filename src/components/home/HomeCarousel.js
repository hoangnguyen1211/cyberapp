import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper';

const screenWidth = Dimensions.get('window').width * 0.5;
export default HomeCarousel = () => {

    const data = [
        { title: "Mobile", image: "https://i.imgur.com/rflKvhl.png" },
        { title: "Backend", image: "https://i.imgur.com/bDgELee.png" },
        { title: "Frontend", image: "https://i.imgur.com/VQzG71v.png" },
        { title: "Design", image: "https://i.imgur.com/OMwlN7x.png" }
    ]

    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons={true}>
            {
                data.map((item, index) => {
                    return <ImageBackground
                        key={index}
                        source={{ uri: item.image }}
                        style={styles.slide}
                        >
                        {/* <Text style={styles.text}>{ item.title }</Text> */}
                    </ImageBackground>
                })
            }
        </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    wrapper: {
        height: screenWidth
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
