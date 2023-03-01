import { StyleSheet, Text, View, Modal } from 'react-native'
import  Buttons  from '../Button/Button'

const ModalDel = ({productSelect, modalVisible=false, onCancelModal, onDeleteModal}) => {

  return (

    <Modal  animationType="fade" transparent={true} visible={modalVisible} >

    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Desea eliminar el producto {productSelect.nameProd}?</Text>
          <View style={styles.buttonContainer}>
            <Buttons style={styles.deleteButton}  onPress={() => {
                onDeleteModal(productSelect.id)}}><Text style={styles.buttonText}>Sí</Text>
            </Buttons>
          <Buttons style={styles.cancelButton} onPress={onCancelModal}>
              <Text style={styles.buttonText}>No</Text>
            </Buttons>
          </View>
        </View>
      </View>   
    </Modal>
  );
};

export default ModalDel

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
        width: '30%',
      },
      deleteButton: {
        backgroundColor: '#6ca115ef',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      cancelButton: {
        backgroundColor: 'grey',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})