import React, { useState, useEffect } from 'react';
import './reply.css';
import { Button, Form, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FaBolt } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

export default function Reply({ mode, handleClose, show }) {  
    const [editorText, setEditorText] = useState('');
    const [toEmail,setToEmail]=useState(null);
    const [fromEmail,setFromEmail]=useState(null);
    const [subject,setSubject]=useState(null);
    const [key, setKey] = useState(0); 

    const handleEditorChange = (value) => {
        setEditorText(value);
    };

    function handleReply(){
        const req ={
            "toName": "Mitrajit",
            "to": "chandra.rupam@gmail.com",
            "from": "mitrajit2022@gmail.com",
            "fromName": "Mitrajit",
            "subject": "Optimize Your Recruitment Efforts with Expert Support",
            "body": editorText,
            "references": [
                "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
                "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
                "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
                "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
            ],
            "inReplyTo": "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
        }
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
