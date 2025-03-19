import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/participant'

export function Home() {
  function handleParticipantAdd() {
    console.log('participante adicionado')
  }

  function handleParticipantRemove() {
    console.log('participante removido')
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

      <Participant name="123123sdasd" />
      <Participant name="asdasdasd" onRemove={handleParticipantRemove} />
    </View>
  )
}
