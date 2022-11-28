// invoice id
export function stringGen(len = 2) {
  var text = "";
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 2; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  var number = Math.floor(1000 + Math.random() * 9000);
  var string = text + number;
  return string;
}

export function dueDateString(date, days) {
  if (!date) return null;
  if (!days) return null;
  var result = new Date(date);

  result.setDate(result.getDate() + days);
  let shortMonth = result.toLocaleString("en-us", { month: "short" }); /* Jun */

  return `${result.getDate()} ${shortMonth} ${result.getFullYear()}`;
}
export function dueDate(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return `${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`;
}
