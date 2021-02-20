import React, { useEffect, useState } from 'react'

import ReactModal from 'react-modal';

import { Container } from './styles'


interface IModalProps {
  setIsOpen: () => void;
  isOpen: boolean;
  deleteBook: (id: any) => void;
}


const DeleteBookModal: React.FC<IModalProps> = ({isOpen, setIsOpen, deleteBook}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);


  

  return (
    <ReactModal
        shouldCloseOnOverlayClick
        ariaHideApp={false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      > 
      <Container>
        <p>Deseja mesmo exlcuir?</p>
        <div>
          <button 
          onClick={(e) => {e.preventDefault(); 
            setIsOpen()}}>Cancelar</button>
          <button onClick={deleteBook}>Excluir</button>
        </div>
        
        </Container>
      </ReactModal>
  )
}

export default DeleteBookModal