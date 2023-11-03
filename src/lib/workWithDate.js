function setDateLimits(date){
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const yyyy = yesterday.getFullYear();
  const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
  const dd = String(yesterday.getDate()).padStart(2, '0');

  const yesterdayDate = yyyy + '-' + mm + '-' + dd;
  const minDate = yyyy-128 + '-' + mm + '-' + dd
  date.max = yesterdayDate;
  date.min = minDate;
  date.default = yesterdayDate;
}