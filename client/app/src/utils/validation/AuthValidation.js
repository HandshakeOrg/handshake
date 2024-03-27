// isEmpty function to check if the value is empty or not
export const isEmpty = (value) => {
  // An empty value is considered falsy, so we return true if the value is falsy, and false otherwise
  return !value;
};

// isEmail function to check if the given string is a valid email
export const isEmail = (email) => {
  // Regular expression to match a valid email address
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // test method returns true if the email matches the regex, and false otherwise
  return regex.test(email);
};

// isLength function to check if the given password is at least 6 characters long
export const isLength = (password) => {
  // Using the optional chaining operator (?.) to safely check the length of the password
  return password?.length >= 6;
};

// isMatch function to check if the given password and confirmation password match
export const isMatch = (password, confirmPassword) => {
  // Simply returning true if the passwords match, and false otherwise
  return password === confirmPassword;
};
