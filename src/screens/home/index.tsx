import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState(['samuel'])

  function handleParticipantAdd() {
    if (participants.includes('euu')) {
      return Alert.alert('Participante existe', 'esse nome já existe na lista')
    }
    setParticipants((prevState) => [... prevState, 'euu'])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `deseja realmente remover o participante ${name}`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        onPress: () => Alert.alert('Removido', 'participante removido'),
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventNames}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quarta, 19 de maio de 2025</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="white"
        />

        <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante</Text>
        )}
      />
    </View>
  )
}
