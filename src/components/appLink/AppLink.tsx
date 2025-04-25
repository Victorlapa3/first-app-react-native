import { Text, TextStyle } from "react-native";
import { styles } from "./AppLinkStyle";

interface AppLinkProps {
    text: string;
    route: string;
    navigation: any;
    style?: TextStyle | TextStyle[];
}

export default function AppLink({ text, route, navigation, style }: AppLinkProps) {
    const changeRoute = () => {
        navigation.navigate(route);
    };

    return (
        < Text onPress={changeRoute} style={[styles.link, style]} >
            {text}
        </Text >
    );
}