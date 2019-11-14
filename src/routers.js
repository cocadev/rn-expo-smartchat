import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import * as Font from 'expo-font';
import ProfileScreen from './screens/profile';
import MainScreen from './screens/main';

export default class Routers extends PureComponent {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await this._loadAssets();
  }

  async _loadAssets() {
    await Font.loadAsync({
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        {
          this.state.fontLoaded == true &&
          <Router>
            <Scene>
              <Scene key="main" component={MainScreen} hideNavBar />
              <Scene key="profile" component={ProfileScreen} hideNavBar />
            </Scene>
          </Router>
        }
      </KeyboardAvoidingView>
    );
  }
}
