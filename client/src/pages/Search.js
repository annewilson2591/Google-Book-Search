import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubmitBtn from '../components/SubmitBtn';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Button from '../components/Link';
import API from '../utils/API';
import './style.css';

class Search extends Component {
    state = {
        keyword: '',
        author: '',
        bookList: [],
        termSearched: true,
        updateBook: false,
        savedBookTitle: ''
    }

    searchBookByKeyword = () => {
        API.searchBookByKeyword(this.state.keyword)
            .then(res => {
                console.log(res.data.items)
            this.setState({ bookList: res.data.items })
            })
            .catch(error => console.log(error))
    }

    searchBookByKeywordAndAuthor = () => {
        API.searchBookByKeywordAndAuthor(
            this.state.keyword,
            this.state.author
        ).then(res => this.setState({ bookList: res.data.items }))
        .catch(error => console.log(error));
    }

    handleInputChange = event => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.keyword) {
            this.setState({ termSearched: false })
        } else if (!this.state.author) {
            this.searchBookByKeyword();
        } else {
            this.searchBookByKeywordAndAuthor();
        }
    }

    saveBookToDB = data => {
        API.addBook(data)
            .then(res => {
                this.setState({ savedBookTitle: res.data.title });
                this.notify();
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Header title="Google Books Search" />
                {/* link to favorites */}
                <Link to="/books">
                    <Button label={"Go to Favorites"} />
                </Link>
                <div className="search-container">
                    <div className="display">
                        <h2 className="sub-title">Search & Save Books</h2>
                    </div>
                    {/* form to search books */}
                    <div className="display search-form">
                        <form>
                            <SearchBar
                            name="keywords"
                            value={this.state.keyword}
                            onChange={this.handleInputChange}
                            placeholder={this.state.termSearched
                                ? "Search by keywords"
                            : "Keyword Required"} />
                            <SearchBar
                            placeholder="Filter by author"
                            name="author"
                            value={this.state.author}
                            onChange={this.handleInputChange} />
                            <SubmitBtn label="Sumbit" onClick={this.handleSubmit} />
                        </form>
                    </div>
                
                        {/* list of book results */}
                        <div>
                            {this.state.bookList.map(book => {
                                let result = {
                                    title: book.volumeInfo.title,
                                    authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ').toString() : 'Author unavailable',
                                    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '../images/default.png',
                                    description: book.searchInfo ? book.searchInfo.textSnippet : 'No description available',
                                    link: book.volumeInfo.previewLink
                                }

                                return (
                                    <div className="display2" key={book.id}>
                                        <Card
                                        title={result.title} authors={result.authors}
                                        image={result.image} description={result.description}
                                        link={result.link} btnType="Save"
                                        handler={() => this.saveBookToDB(result)} />
                                    </div>
                                );
                            })}
                        </div>
                </div>
            </div>
        )
    }
}

export default Search;