import { View, Text } from 'react-native';
import{ gql, useQuery} from '@apollo/client'

const GET_EVENT = gql`
    query getEvent {
        event(id:13) {
            name,
            source,
            description
        }
    }
`;

export const WelcomeScreen = () => {
    const data = useQuery(GET_EVENT);

    console.log(data);
    if (data.loading) {
        return <View>
            <Text>Загрузка..</Text>
        </View>
    }
    else {
    return (data.data.event.description)
    }
}
