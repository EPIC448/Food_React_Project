import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const navigator = createStackNavigator({
//   Search: SearchScreen
// },
//   {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'Business Search'
//   }
//   });



// export default createAppContainer(navigator);