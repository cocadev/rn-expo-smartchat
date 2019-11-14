import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Scene, Router, Drawer } from 'react-native-router-flux';
import * as Font from 'expo-font';
import SideMenu from './components/sideMenu';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import UserProfile from './screens/userProfile';
import Invites from './screens/invites';
import Notifications from './screens/notification';
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
        style={{ flex: 1 }}>
        {this.state.fontLoaded == true ?

          <Router>
            <Scene>
             
              <Scene key="main" component={MainScreen} hideNavBar />

              <Scene key="home" component={HomeScreen} hideNavBar />
              <Scene key="notifications" component={Notifications} hideNavBar />
              <Scene key="invites" component={Invites} hideNavBar />
              <Scene key="userprofile" component={UserProfile} hideNavBar />

              <Scene key="profile" component={ProfileScreen} hideNavBar />

            </Scene>
          </Router>
          : null}
      </KeyboardAvoidingView>
    );
  }
}
