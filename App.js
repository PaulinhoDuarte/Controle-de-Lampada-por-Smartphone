import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Title from './src/components/Title'
import Home from './src/components/Home'
import RealTime from './src/components/RealTime'


function ScreenHome() {
  return (
    <View style={styles.container}>
      <Title/>
      <Home/>
    </View>
  );
}

function ScreenRealTime() {
  return (
    <View style={styles.container}>
      <Title/>
      <RealTime/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name= "Home" component={ScreenHome} options={{
        tabBarIcon: ({size, color}) => (
          <Image
            source={
              require('./src/IMG/home.png')
            }
            style={{
              width: size,
              height: size,
              borderRadius: size,
            }}
          />
        ),
        tabBarActiveTintColor: "#FF0043",
      }}
      />
      <Tab.Screen name= "RealTime" component={ScreenRealTime} options={{
        tabBarIcon: ({size}) => (
          <Image
            source={
              require('./src/IMG/RealTime.png')
            }
            style={{
              width: size,
              height: size,
              borderRadius: size,
            }}
          />
        ),
        tabBarActiveTintColor: "#FF0043",
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3DCDC',
    paddingTop: 80,
  },
});
