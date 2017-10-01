import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import BookDetails from "./BookDetails";
import * as bookActions from "../../actions/bookActions";

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchBookById(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails book={this.props.book} />
      </div>
    );
  }
}

BookDetailsPage.propTypes = {
  fetchBookById: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
