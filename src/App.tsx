import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Onboarding} from './screens/onboarding/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from './screens/welcome/Welcome';
import {Login} from './screens/login/Login';
import Toast from 'react-native-toast-message';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SignUp} from './screens/singup/SignUp';
import {SignUpSuccess} from './screens/singup/SignUpSuccess';
import {Home} from './screens/home/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type RootStackParamList = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  SignUpSuccess: {name: string};
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
              headerShown: false,
              contentStyle: {backgroundColor: 'white'},
            }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </SafeAreaProvider>
    </>
  );
};

export default App;
