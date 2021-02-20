import React, { useCallback, useState, useEffect, useRef } from 'react';

import { Container, Content, Titles, Form, Input, Checkbox, CardList, Card, CardTitle, Author, Pages, Description, Tags, CardSubtitle, SearchArea, AddButton, RemoveButton, CardHeader } from './styles';

import api from '../../services/api'

import {FiSearch, FiPlus} from 'react-icons/fi'

import AddBookModal from '../../components/AddBookModal'
import DeleteBookModal from '../../components/DeleteBookModal'

interface IBooks {
  id: string;
  title: string;
  author: string;
  description: string;
  pages: number;
  tags: Array<string>;
}

const Dashboard: React.FC = () => {

  const [books, setBooks] = useState<IBooks[]>([]);
  const [search, setSearch] = useState('');

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [deletingBook, setDeletingBook] = useState('')

  const toggleEditModal = useCallback((): void => {
    setEditModalIsOpen(!editModalIsOpen);
  }, [editModalIsOpen]);

  const toggleDeleteModal = useCallback((): void => {
    setDeleteModalIsOpen(!deleteModalIsOpen);
  }, [deleteModalIsOpen]);


  const checkboxRef = useRef<HTMLInputElement>(null);

  const sendData = useCallback(async (data: any): Promise<void> => {
    const newBook = await api.post<IBooks>('/books', {
      title: data.title,
      author: data.author,
      description: data.description,
      pages: data.pages,
      tags: data.tags.split(' '),
    })

    setBooks([...books, newBook.data])
  }, [books]);
  
  const handleDeleteBook = useCallback(async()=> {
    await api.delete(`/books/${deletingBook}`)

    setBooks(books.filter(book => book.id !== deletingBook))
    toggleDeleteModal();
  },[books, deletingBook, toggleDeleteModal])

  useEffect(() => {
    async function loadBooks() {
      const books = await api.get('/books');

      setBooks(books.data);
    }
    loadBooks();
  }, [])

  const handleSearch = useCallback(async (e)=> {
    e.preventDefault();
    if (checkboxRef.current?.checked) {
      const booksByTag = await api.get<IBooks[]>('/books', {
        params: {
          tags: search.toLowerCase()
        }
      });

      setBooks(booksByTag.data)
    } else {
      const searchedBooks = await api.get<IBooks[]>('/books')

      setBooks(searchedBooks.data.filter(book => book.title.toLowerCase().includes(search.toLowerCase())))
    }
  },[search])

  
  return (
    <Container>
      <Content>
      <Titles>
        <span>MLPR</span>
        <p>Melhores livros para relembrar</p>
      </Titles>
      <SearchArea>

      <Form onSubmit={(e) => handleSearch(e)}>
        <Input>
        <input placeholder="Buscar"type="text" onChange={(event)=> setSearch(event?.target.value)}/>
        <button type="submit"><FiSearch size={20}/></button>
        </Input>
        <Checkbox>
          <input ref={checkboxRef} type="checkbox"/>
          Procurar somente por tags
        </Checkbox>
      </Form>
      <AddButton onClick={() => {toggleEditModal()}}> <FiPlus/> Adicionar </AddButton>
      </SearchArea>

      <CardList>
        {books && books.map(book => {
          return (
        <Card key={book.id}>

          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
            <RemoveButton onClick={()=> {
              toggleDeleteModal()
              setDeletingBook(book.id)
              }}> remover </RemoveButton>
          </CardHeader>
          
          <CardSubtitle>
            <Author>  {book.author} </Author> &nbsp; - &nbsp;  
            <Pages>   {book.pages}  </Pages>
          </CardSubtitle>
          
          <Description>{book.description}</Description>

          <Tags>
            {book.tags.map(tag => <span>#{tag}</span>)}
          </Tags>
        </Card>
          )
        })}
      </CardList>
      </Content>

      <AddBookModal 
        sendData={sendData}
        setIsOpen={toggleEditModal}
        isOpen={editModalIsOpen}
        />

        <DeleteBookModal
        deleteBook={handleDeleteBook} 
        isOpen={deleteModalIsOpen}
        setIsOpen={toggleDeleteModal}
        />
      

    </Container>
  )
}

export default Dashboard;