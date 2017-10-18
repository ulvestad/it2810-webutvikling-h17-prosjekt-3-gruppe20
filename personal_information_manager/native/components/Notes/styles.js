import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1
  },
  inputField: {
    fontSize: 20
  },
  h1: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'center'
  },
  noteContainer: {
    padding: 10,
    borderTopWidth: 1
  },
  notes: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  note: {
    flex: 0,
    width: 120,
    height: 120,
    margin: 20,
    padding: 5,
    backgroundColor: '#343A40',
  },
  h2: {
    fontSize: 22,
    fontWeight: '300',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  }
});
