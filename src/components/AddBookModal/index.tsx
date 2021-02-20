import React, {useState, useEffect, useCallback} from 'react'

import ReactModal from 'react-modal';

import {FiPlus} from 'react-icons/fi'

import {Form, Input, TextArea, Title, Button, ButtonArea } from './styles'



interface IModalProps {
  setIsOpen: () => void;
  isOpen: boolean;
  sendData: (data: any) => void;
}



const AddBookModal: React.FC<IModalProps> = ({isOpen, setIsOpen, sendData}: IModalProps) => {

  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = useCallback((event)=> {
      event.preventDefault();
      sendData({title, author, description, pages, tags})
      setIsOpen()
  }, [sendData, title, author, description, pages, tags, setIsOpen])

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
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        <Title><FiPlus/> Adicionar </Title>
        <Form onSubmit={handleSubmit}>
      
          <label htmlFor="titulo">Título</label>
          <Input name="titulo" onChange={event => setTitle(event.currentTarget.value)}/>
          <label htmlFor="autor">Autor</label>
          <Input name="autor" onChange={event => setAuthor(event.currentTarget.value)}/>
          <label htmlFor="descriçao">Descrição</label>
          <TextArea name="descriçao" onChange={event => setDescription(event.currentTarget.value)}/>
          <label htmlFor="paginas">Páginas</label>
          <Input name="paginas" onChange={event => setPages(event.currentTarget.value)}/>
          <label htmlFor="tags">Tags</label>
          <Input name="tags" onChange={event => setTags(event.currentTarget.value)}/>

          <ButtonArea>
            <Button onClick={(e) => {e.preventDefault(); 
              setIsOpen()}}>Cancelar</Button>
            <Button type="submit"><FiPlus/>Adicionar</Button>
          </ButtonArea>



        </Form>

      
      </ReactModal>
  )
}

export default AddBookModal