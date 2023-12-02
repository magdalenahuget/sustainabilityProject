const Idea = ({img, title, description, handleModal}) => {
    return (
        <div className="idea">
            <img className="idea-img" src={img} alt="{title}"/>
            <div className="idea-content">
                <h1 className="idea-title">{title}</h1>
                <p className="idea-description">{description}</p>
            </div>
            <button type="submit" className="idea-btn" onClick={handleModal}>
                Discover more!
            </button>
        </div>
    );
};
export default Idea;