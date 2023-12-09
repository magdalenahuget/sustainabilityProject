import 'react-pure-modal/dist/react-pure-modal.min.css';
import PureModal from 'react-pure-modal';

const SubmissionMessage = ({submitted, setSubmitted, modal}) => {
    return modal ? (
        <PureModal
            header="THANK YOU!"
            isOpen={submitted}
            closeButton="X"
            closeButtonPosition="header"
            onClose={() => {
                setSubmitted(false); // Empty the form, but pop-up disappears
                return true;
            }}
        >
            <p style={{wordBreak: 'normal'}}>Thank you for your message, we will respond shortly!</p>
        </PureModal>
    ) : (
        <>
            <p style={{wordBreak: 'normal'}}>
                Thank you for your interest in our workshop, we will respond shortly!
            </p>
        </>
    );
};

export default SubmissionMessage;