import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import { BaseHeader } from '../../components/base';
import { CourseList } from '../../components/learning';

export default class CourseScreen extends Component {

  onGoBackHandler = () => {
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <BaseHeader 
          title="Khoá học"
          onGoBack={this.onGoBackHandler} 
        />
        <Content>
          <CourseList navigation={navigation} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});