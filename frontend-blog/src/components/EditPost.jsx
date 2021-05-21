import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { editPost } from '../redux/postsDuck'


export default function NewPost() {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    title: '',
    bofy: '',
  })


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editPost(data))
    window.location.replace("/") 
   }

  return (
    <div className='d-flex justify-content-center row  '>
      <Button className='col-6 col-lg-2 ' variant="primary" onClick={handleShow}>
      <i className="bi bi-pencil"></i>
        </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton className='d-flex justify-content-center gap-5'>
          <Modal.Title className='text-decoration-underline'> <i className="bi bi-plus-circle"></i>  NEW POST</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <div className="row justify-content-center">
              <Form.Group className='col-10 col-lg-7 pb-3' >
                <Form.Control type="text" name='concept' placeholder="Title" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className='col-10 col-lg-7 pb-3' >
                <Form.Control type="text" name='concept' placeholder="Body" onChange={handleInputChange} />
              </Form.Group>

            </div>

            <Modal.Footer className='justify-content-center'>
              <Button type='submit' variant="secondary" className="block">
                Submit
            </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>

      </Modal>
    </div>
  );
}

