import React from "react";

const BookForm = () => {
  let titleInput,
    authorInput,
    priceInput,
    yearInput = null;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const input = {
          title: titleInput.value,
          author: authorInput.value,
          price: priceInput.value,
          year: yearInput.value
        };
        this.submitBook(input);
        e.target.reset();
      }}
      className="form-horizontal"
    >
      <div className="input-group">
        <label htmlFor="" className="col-sm-2 control-label">
          Title:{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            name="title"
            ref={node => (titleInput = node)}
            className="folrm-control"
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="" className="col-sm-2 control-label">
          Author:{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            name="author"
            ref={node => (authorInput = node)}
            className="folrm-control"
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="" className="col-sm-2 control-label">
          Price:{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            name="price"
            ref={node => (priceInput = node)}
            className="folrm-control"
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="" className="col-sm-2 control-label">
          Year:{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            name="year"
            ref={node => (yearInput = node)}
            className="folrm-control"
          />
        </div>
      </div>
      <div className="input-group">
        <div className="col-sm-offset-2 col-sm-10">
          <input type="submit" className="btn btn-default" />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
