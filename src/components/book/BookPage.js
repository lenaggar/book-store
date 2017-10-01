import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";
import BookForm from "./BookForm";
import * as bookActions from "../../actions/bookActions";

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    this.props.createBook(input);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td />
              </th>
            </thead>
            <tbody>
              {this.props.books.map((b, i) => (
                <tr key={i}>
                  <td>{b.title}</td>
                  <td>
                    <Link to={`/books/${b.id}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  createBook: PropTypes.func.isRequired
};

const mapStateTopProps = (state, ownProps) => {
  return { books: state.books };
};

const mapDispatchTopProps = dispatch => {
  return { createBook: book => dispatch(bookActions.createBook(book)) };
};

export default connect(mapStateTopProps, mapDispatchTopProps)(Book);
