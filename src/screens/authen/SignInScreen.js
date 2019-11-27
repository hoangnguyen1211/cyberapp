import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Title } from 'native-base';
import { Row, Grid } from "react-native-easy-grid";
import { ButtonLink, ButtonForm, InputForm } from '../../components/form';

const screenWidth = Dimensions.get('window').width;
export default class SignInScreen extends Component {

  state = {
    info: {}
  }

  /**
   * Hàm xử lý sự kiện khi người dùng nhập text
   */
  onChangeText = (name, text) => {
    const { info } = this.state;
    this.setState({
      info: { ...info, [name]: text }
    });
  }

  /**
   * Hàm xử lý sự kiện khi người dùng bấm chuyển qua màn hình đăng ký
   */
  onGoToSignUpScreen = () => {
    this.props.navigation.navigate('SignUp');
  }

  /**
   * Hàm xử lý sự kiện khi người dùng bấm chuyển qua màn hình quên mật khẩu
   */
  onGoToForgotPasswordScreen = () => {
    this.props.navigation.navigate('SignUp');
  }

  /**
   * Hàm xử lý sự kiện khi người dùng bấm nút đăng nhập
   */
  onSubmitForm = () => {
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <Container>
        <Grid>
          <Row size={2} style={{ position: 'relative' }}>
            <View style={styles.backgroundImage}>
              <Image
                style={{ height: screenWidth, width: screenWidth }}
                source={require('../../assets/image/work-group.png')}
                resizeMode="cover"
              />
            </View>
          </Row>
          <Row size={3}>
            <Content style={styles.wrapper}>
              <Title style={styles.title}>ĐĂNG NHẬP</Title>
              <InputForm
                style={styles.input}
                rounded
                placeholder="Email"
                name="email"
                onChangeText={this.onChangeText}
              />

              <InputForm
                style={styles.input}
                rounded
                placeholder="Mật khẩu"
                type="password"
                name="password"
                onChangeText={this.onChangeText}
              />

              <ButtonForm rounded onPress={this.onSubmitForm}>
                ĐĂNG NHẬP
              </ButtonForm>

              <ButtonLink
                onPress={this.onGoToForgotPasswordScreen}
                style={[styles.text, { marginVertical: 30 }]}
              >
                Quên mật khẩu?
              </ButtonLink>

              <View style={styles.horizontal}>
                <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
                <ButtonLink
                  onPress={this.onGoToSignUpScreen}
                  style={[styles.text, styles.buttonLink]}>
                  ĐĂNG KÝ
                </ButtonLink>
              </View>
            </Content>
          </Row>
        </Grid>



      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: '5%'
  },
  backgroundImage: {
    width: screenWidth * 1.5,
    height: screenWidth * 1.5,
    borderRadius: screenWidth,
    position: 'absolute',
    top: '-70%',
    left: '-25%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  title: {
    marginVertical: 20,
    fontSize: 20
  },
  input: {
    marginBottom: 15
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  },
  buttonLink: {
    fontWeight: '600',
    textTransform: 'uppercase',
    marginLeft: 5
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});