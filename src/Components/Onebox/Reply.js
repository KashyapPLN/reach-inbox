import React, { useState, useEffect } from 'react';
import './reply.css';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FaBolt } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

export default function Reply({ mode,setShow, show ,threadId,threads}) {  
    const [editorText, setEditorText] = useState('');
    const [toEmail,setToEmail]=useState(null);
    const [fromEmail,setFromEmail]=useState(null);
    const [subject,setSubject]=useState(null);
    const [key, setKey] = useState(0); 

    const handleEditorChange = (value) => {
        setEditorText(value);
    };
    const handleClose = () => setShow(false);
   async function handleReply(){
        const key= localStorage.getItem('token');
        const req ={
            "toName": threads[0].toName,
            "to": threads[0].toEmail,
            "from": threads[0].fromEmail,
            "fromName": threads[0].fromName,
            "subject": threads[0].subject,
            "body": editorText,
            "references": [
                threads[0].references
            ],
            "inReplyTo": threads[0].inReplyTo
        }
        console.log(req);

        await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify(req)
        }).then(response => response.json())
            .then(data => {
                setEditorText('');
                  handleClose();             
            })
            .catch(error => {
                Alert("Sending failed!")
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [mode]);

    return (
        <>
            <Modal 
                show={show} 
                onHide={handleClose} 
                centered 
                className={mode === 'dark' ? 'modal-dark' : 'modal-light'} 
                style={{ border: '1px solid #41464B'}}
            >
                <Modal.Header style={{ height: '40px',borderBottom:'1px solid #343A40', backgroundColor: mode === 'dark' ? '#23272C' : 'white' }} closeButton>
                    <div style={{ fontWeight: 500 }}>Reply</div>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: mode === 'dark' ? '#23272C' : 'white'}}>
                    <Form>
                        <Form.Group controlId="formToEmail">
                            <Form.Label>To:</Form.Label>
                            <input 
                                className="search-box" 
                                type="email" 
                                placeholder="jeanne@icloud.com" 
                                value={threads[0].toEmail}
                                style={{ 
                                    color: mode === 'dark' ? 'white' : 'black', 
                                    backgroundColor: mode === 'dark' ? '#25262B' : 'white',
                                    border: '1px solid #41464B' 
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFromEmail">
                            <Form.Label>From:</Form.Label>
                            <input 
                                type="email" 
                                placeholder="peter@reachinbox.com" 
                                value={threads[0].fromEmail}
                                className="search-box" 
                                style={{ 
                                    color: mode === 'dark' ? 'white' : 'black', 
                                    backgroundColor: mode === 'dark' ? '#25262B' : 'white',
                                    border: '1px solid #41464B' 
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formSubject">
                            <Form.Label>Subject:</Form.Label>
                            <input 
                                type="text" 
                                placeholder="Warmup Welcome" 
                                className="search-box"  
                               value={threads[0].subject}
                                style={{ 
                                    color: mode === 'dark' ? 'white' : 'black', 
                                    backgroundColor: mode === 'dark' ? '#25262B' : 'white',
                                    border: '1px solid #41464B' 
                                }} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formBody">
                            <ReactQuill
                                key={key}
                                value={editorText}
                                onChange={handleEditorChange}
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                                        [{ size: [] }],
                                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                                        ['link', 'image'],
                                        ['clean']
                                    ]
                                }}
                                formats={[
                                    'header', 'font', 'size',
                                    'bold', 'italic', 'underline', 'strike', 'blockquote',
                                    'list', 'bullet', 'indent',
                                    'link', 'image'
                                ]}
                                theme="snow"
                                className="custom-quill-editor mt-3"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{borderTop:'1px solid #343A40', backgroundColor: mode === 'dark' ? '#23272C' : 'white' }}>
                    <button variant="primary" onClick={handleReply} className='create-account'>
                        Send <span className='ms-2'><RiArrowDownSFill /></span>
                    </button>
                    <Button style={{ color: mode === 'dark' ? 'white' : 'black'}} variant="text" onClick={handleClose}>
                    <FaBolt /> Variables
                    </Button>
                    <Button style={{ color: mode === 'dark' ? 'white' : 'black'}} variant="text" onClick={handleClose}>
                    <IoEyeOutline />  Preview Email
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
