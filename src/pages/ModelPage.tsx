import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleClick = () => {
        setShowModal((currentState) => !currentState);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    //modal component
    //actionbar component
    const button = (
        <>
            <Button primary onClick={handleClose} className="mx-3">
                Agree
            </Button>
            <Button secondary onClick={handleClose}>
                I disagree
            </Button>
        </>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={button}>
            <p>
                Here is some info about how to use this app if you want to agree
                with terms &conditions
            </p>
        </Modal>
    );

    return (
        <>
            <Button onClick={handleClick} primary>
                show Modal
            </Button>
            {showModal && modal}
        </>
    );
}

export default ModalPage;
