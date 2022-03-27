import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import SettingsScreen from './screens/Settings';
import OtherScreen from './screens/Other';

//Screen names
const homeName = "Home";
const detailsName = "Pesanan Saya";
const settingsName = "Pembatalan";
const otherName = "Lainnya";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home';

            } else if (rn === detailsName) {
              iconName = focused ? 'clipboard' : 'clipboard';

            } else if (rn === settingsName) {
              iconName = focused ? 'receipt' : 'receipt';
            
            } else if (rn === otherName) {
              iconName = focused ? 'list' : 'list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarinactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70}
        })}
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={otherName} component={OtherScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;