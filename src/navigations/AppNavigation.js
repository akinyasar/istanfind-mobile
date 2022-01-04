import React , { useEffect, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import LoginScreen from '../screens/Login/LoginScreen'; 
import HomeScreen from '../screens/Home/HomeScreen';
import AboutScreen from '../screens/About/AboutScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import PlaceScreen from '../screens/Place/PlaceScreen';
import PlacesListScreen from '../screens/PlacesList/PlacesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import AccountScreen from '../screens/Account/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from '../FirebaseConfig';


 const Stack = createStackNavigator();

function MainNavigator() {

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLogin(true);
      }
      else {
        setIsLogin(false);
      }
    })

    return unsubscribe
  }, [])

  return(
    isLogin ==true ?
    (<Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='About' component={AboutScreen} />
      <Stack.Screen name='Account' component={AccountScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Place' component={PlaceScreen}/>
      <Stack.Screen name='PlacesList' component={PlacesListScreen} />
    </Stack.Navigator>)
    :(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>)
  )
} 

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (

        <Tab.Navigator >
          <Tab.Screen name="Home"  component={MainNavigator} options={{tabBarIcon:getTabBarIcon('home'),headerShown:false,}} />
          <Tab.Screen name="Account" component={AccountScreen} options={{tabBarIcon:getTabBarIcon('account-circle'),headerTitleAlign: 'center'}}/>
        </Tab.Navigator>

   );
  }

 const Drawer = createDrawerNavigator();

function DrawerStack() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLogin(true);
      }
      else {
        setIsLogin(false);
      }
    })

    return unsubscribe
  }, [])

  return(
    isLogin ==true ?
    (<Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>)
  :(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>)
  )
} 

 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableLogBox = true;