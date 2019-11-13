import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Platform, Dimensions } from 'react-native'
import { Scene, Router, Drawer } from 'react-native-router-flux'

import * as Font from 'expo-font';
import SideMenu from './components/sideMenu';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';


const width = Dimensions.get('window').width

export default class Routers extends PureComponent {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await this._loadAssets();
  }

  async _loadAssets() {
    await Font.loadAsync({
      'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),

    });
    console.log('fonts loaded!');
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

              <Drawer
                hideNavBar
                initial={false}
                key="drawerMenu"
                contentComponent={SideMenu}
                drawerWidth={width/1.2}
                drawerPosition="left"
              >

                <Scene key="home" component={HomeScreen} hideNavBar/>
                <Scene key="profile" component={ProfileScreen} hideNavBar/>

              </Drawer>
            </Scene>
          </Router>
          : null}
      </KeyboardAvoidingView>
    );
  }
}
