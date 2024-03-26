const Message = (props) => {
    const { text, type } = props; 

    const messageType = type ? type : 'info';

    return (
        <div className={`message ${messageType}`}>
            <p>{text}</p>
        </div>
    );
};

export default Message; 
