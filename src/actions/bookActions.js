import Axios from "axios";
import * as actionTypes from "./actionTypes";

const apiUrl = "http://59d0f801ad35760011425e8b.mockapi.io/api/books";

export const fetchBooks = () => {
  return dispatch => {
    return Axios.get(apiUrl)
      .then(res => dispatch(fetchBooksSuccess(res.data)))
      .catch(err => {
        throw err;
      });
  };
};

export const fetchBooksSuccess = books => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books: books
  };
};

export const createBook = book => {
  return dispatch => {
    return Axios.post(apiUrl, book)
      .then(res => dispatch(createBookSuccess(res.data)))
      .catch(err => {
        throw err;
      });
  };
};

export const createBookSuccess = book => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book: book
  };
};

export const fetchBookById = bookId => {
  return dispatch => {
    return Axios.get(apiUrl + "/" + bookId)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchBookByIdSuccess = book => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};
