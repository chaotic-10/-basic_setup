import HomeScreen from "../Homescreen"
import Login from "./login"
import Register from "./register"
// import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();


const Layout = () => {
  return (
  
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }}/>
    </Stack.Navigator>

  );
};

export default Layout;