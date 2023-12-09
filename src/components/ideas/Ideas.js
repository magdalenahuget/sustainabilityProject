import {useState} from 'react';
import './Ideas.css';
import Idea from './Idea';
import data from '../../database/data';

const Ideas = () => {
    const [search, setSearch] = useState(data);

    const getIdeasFilteredByTitle = (word) => {
        return search.filter((item) => item.title.toLowerCase().includes(word));
    };

    const getFilteredIdeas = (e) => {
        const inputSearch = e.target.value.toLowerCase();

        if (!inputSearch) {
            setSearch(data);
            return;
        }
        const dataFiltered = getIdeasFilteredByTitle(inputSearch);
        setSearch(dataFiltered);
    };

    return (
        <div className="ideas">
            <div className="ideas-search">
                <img className="loupe" src="./loupe.png"></img>
                <input
                    className="ideas-input"
                    type="text"
                    placeholder="Search by title"
                    onChange={getFilteredIdeas}
                />
            </div>
            <div className="ideas-container">
                {search.map((item, index) => (
                    <Idea key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Ideas;