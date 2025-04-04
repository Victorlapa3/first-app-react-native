import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <StackNavigator>
      <Stack.Screen name="home"></Stack.Screen>
    </StackNavigator>
  );
}
