import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StudyAndExam from "../../Pages/StudyAndExam/StudyAndExam";

const Stack = createStackNavigator();

export default function Practice() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StudyAndExam">
        <Stack.Screen
          name="StudyAndExam"
          component={StudyAndExam}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#f3f5f9",
              height: 88,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
