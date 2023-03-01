import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import Buttons  from '../Button/Button'

const ModalEmptyImput = ({modalEmptyVisible=false, onCancelModalCheck}) => {

  return (
    <Modal animationType="fade" transparent={true} visible={modalEmptyVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Completa los campos faltantes</Text>
          <View style={styles.buttonContainer}>
            <Buttons style={styles.deleteButton} onPress={onCancelModalCheck}>OK</Buttons>
          </View>
        </View>
      </View>   
    </Modal>
  )
}

export default ModalEmptyImput

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      deleteButton: {
        backgroundColor: '#6ca115ef',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})