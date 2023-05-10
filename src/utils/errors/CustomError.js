export default class CustomError {
  static createCustomError({ name = "Error", cause, message }) {
    const newError = new Error(message, { cause }); //agrega causa porque no estaba
    newError.problem = `${name}: ${message}`;
    throw newError;
  }
}
