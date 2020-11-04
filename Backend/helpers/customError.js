class customError extends Error {
  constructor(props) {
    super(props);
    this.message = props.message;

    this.status = props.status;
    this.details = props.details;
  }
}

module.exports = customError;
