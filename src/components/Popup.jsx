function Popup({ question }) {




    return (
        <>
            <div className="popup">
                <span>{question}</span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => console.log("Confirm button clicked")}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel" onClick={() => console.log("Cancel button clicked")}>Cancel</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    );
}

export default Popup;