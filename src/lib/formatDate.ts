export function formatToKoreanDate(date: Date): string {
  const locale = date.toLocaleString("en-US", {
    timeZone: "Asia/Seoul",
  });
  const timeDate = new Date(locale);
  const formattedDate = `${timeDate.getFullYear().toString().substr(-2)}.${(
    "0" +
    (timeDate.getMonth() + 1)
  ).slice(-2)}.${("0" + timeDate.getDate()).slice(-2)}`;
  return formattedDate;
}
