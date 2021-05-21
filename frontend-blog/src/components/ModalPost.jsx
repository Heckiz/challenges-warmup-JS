import React, { useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { deletePost } from '../redux/postsDuck'
import { Link } from 'react-router-dom';
import EditPost from './EditPost'

export default function ModalPost(props) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="dark" className='border border-white border-2' onClick={handleShow}>
        cuentame mas
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header className='d-flex justify-content-center gap-5'>
          <Modal.Title className='text-decoration-underline'> {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="col-12" >
            <Card.Img variant="top" src={props.src} />
            <Card.Body className="pb-0">
              <Card.Text className="text-center">
                {props.body}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="row mt-4 ">
              <div className="col-6 col-sm-8 text-muted text-center text-lowercase">@loremIpsum.blog</div>
              <div className="col-6 col-sm-4  position-relative">
              <div className="position-absolute end-0">
                  <EditPost variant="warning" className="text-decoration-none mx-2" />
                  <Button variant="danger" onClick={async (e) => {
                  e.preventDefault();
                  dispatch(deletePost(props.id));
                  window.location.replace('/');
                }}> <i className="bi bi-trash"></i></Button>
              </div>
              </div>

            </Card.Footer>

          </Card>
        </Modal.Body>

      </Modal>
    </>
  );
}

