import REGEX from "@/lib/regexes";

export function fieldValidator(event, user, errors) {
  const field = event.target;
  if (field.name.includes('name')) {
    errors[field.name] = !REGEX.NAME_UK.test(user[field.name]) && field.value.length > 0;
  } else if (field.name === 'email') {
    errors[field.name] = !REGEX.EMAIL.test(user[field.name]) && field.value.length > 0;
  } else if (field.name === 'password') {
    errors[field.name] =
      (
        REGEX.CYRILLIC.test(user[field.name])
        ||
        !REGEX.UPPER_CASE.test(user[field.name])
        ||
        !REGEX.DIGIT.test(user[field.name])
        ||
        !REGEX.SPECIAL_CHAR.test(user[field.name])
        ||
        field.value.length < 8
      ) && field.value.length > 0
  }
}

export function checkNewUser(user, errors, users) {
  const userValues = Object.values(user)
  const userErrors = Object.values(errors)

  for (let i = 0; i < 7; i++) {
    if (userValues[i] === '') {
      return false
    }
  }

  for (let i = 0; i < 7; i++) {
    if (userErrors[i] === true) {
      return false
    }
  }

  return true;
}