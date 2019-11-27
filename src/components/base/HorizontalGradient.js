import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
export default HorizontalGradient = (props) => {
    const { colors, style } = props;
    return (
        <LinearGradient 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 0 }} 
            colors={colors ? colors : ['#ff9966', '#ff5e62']} 
            style={style}
        >
            { props.children }
        </LinearGradient>
    )
}
