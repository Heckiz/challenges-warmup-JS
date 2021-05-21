import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getPosts } from '../redux/postsDuck';
import { Card, Button } from 'react-bootstrap'
import ModalPost from './ModalPost'
import NewPost from './NewPost';
function PostsList() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            await dispatch(getPosts());
        })();
    }, [dispatch])

    const allPosts = useSelector(state => state.blogStore.posts);
    return (
        <div className="col-11 row justify-content-center border border-dark boder-2">
            <NewPost/>
            {
                allPosts.map(({ title, body, id }) => (
                    <>
                        <Card key={id} className=" col-12 col-lg-3 col-sm-4 m-4" >
                            <Card.Img variant="top" src="https://random.imagecdn.app/500/150" />
                            <Card.Body className="overflow-hidden">
                                <Card.Title className="text-center">{title}</Card.Title>
                                <Card.Text>
                                    {body}
                                </Card.Text>
                                <div className="border-dark border border-2 ">
                                    <ModalPost variant="primary" 
                                    title={title}
                                    body={body}
                                    id={id} src={"https://random.imagecdn.app/500/150"} />
                                </div>
                            </Card.Body>
                        </Card>
                    </>

                ))
            }
        </div>
    )
}

export default PostsList
