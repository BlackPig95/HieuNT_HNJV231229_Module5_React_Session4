function Modal({ title, message, onClose, onConfirm, cancelText, confirmText })
{
    return (
        <>
            <div className="overlay" hidden="">
                <div className="modal-custom">
                    <div className="modal-title">
                        <h4>{ title }</h4>
                        <i className="fa-solid fa-xmark" />
                    </div>
                    <div className="modal-body-custom">
                        <span>{ message }</span>
                    </div>
                    <div className="modal-footer-custom">
                        <button onClick={ onClose } className="btn btn-light">{ cancelText }</button>
                        <button onClick={ onConfirm } className="btn btn-danger">{ confirmText }</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;