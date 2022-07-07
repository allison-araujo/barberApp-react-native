import styled from 'styled-components/native';

const Modal = styled.Modal``;

const ModalArea = styled.View``;

const ModalBody = styled.View``;

export default ({show, setShow, user, service}) => {
  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody></ModalBody>
      </ModalArea>
    </Modal>
  );
};
