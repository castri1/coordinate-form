const dateValidator = date => date instanceof Date && !isNaN(date);
const numberValidator = x => !isNaN(x) && typeof x === "number";
const idValidator = id => /^TPS\d{4}$/.test(id);

function dateParser(dateValue, timeValue) {
  const [day, month, year] = dateValue.split(".");
  return new Date(`${month} ${day} ${year} ${timeValue}`);
}

export default function validate(id = '', x = '', y = '', z = '', date = '', time = '') {
  const idValid = idValidator(id);
  const xValid = numberValidator(parseFloat(x));
  const yValid = numberValidator(parseFloat(y));
  const zValid = numberValidator(parseFloat(z));
  const dateValid = dateValidator(dateParser(date, time))
  return idValid && xValid && yValid && zValid && dateValid;
}