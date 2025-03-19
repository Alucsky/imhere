import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventNames: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: 'white',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42,
    marginTop: 36,
  },
  emptyListText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
})
