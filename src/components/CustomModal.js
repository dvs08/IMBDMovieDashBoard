import React from 'react';
import '../styles/CustomModal.css'; // Create this CSS file for styling
import { Modal, ModalBody, ModalDescription } from '@innovaccer/design-system';
import "@innovaccer/design-system/css";

const CustomModal = ({ isOpen, onClose, videoUrl }) => {
    if (!isOpen) return null;
    console.log(videoUrl);
    return (
        <div className="modal-overlay">
            {/* <div className="modal-content"> */}
                {/* <button className="close-button" onClick={onClose}>X</button> */}
                <Modal 
                open={isOpen} dimension='large' 
                backdropClose={onClose}
                className="modalMDS"
                >
                    {/* <ModalDescription> */}
                        <iframe
                        title="Trailer"
                        src={videoUrl}
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{ width: '70vh', height: '45vh' }}
                        />
                        {/* </ModalDescription> */}
                </Modal>
                {/* <iframe
                    title="Trailer"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ width: '100%', height: '100%' }}
                /> */}
            {/* </div> */}
        </div>
    );
};

export default CustomModal;