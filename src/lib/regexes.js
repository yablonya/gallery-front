const REGEX = {
  UPPER_CASE: /[A-Z]/,
  SPECIAL_CHAR: /[!@#$%^&*(),.?":{}|<>]/,
  DIGIT: /[0-9]/,
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  NAME_UK:  /^[А-ЯЁЇІҐ][\u0400-\u04FF\s\-]*$/,
  CYRILLIC: /[А-Яа-яҐґЄєІіЇїЁё`']+/gu,
  SPACES: /\s/,
};

export default REGEX;