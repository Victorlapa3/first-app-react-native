import React from 'react';
import { Text } from 'react-native';
import { styles } from './AppLinkStyle';

interface AppLinkProps {
  text: string;
  route: string;
  navigation: any;
}

export default function AppLink({ text, route, navigation }: AppLinkProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };

  return (
    <Text onPress={changeRoute} style={styles.link}>
      {text}
    </Text>
  );
}