// yyyymmdd => yyyy-mm-dd
export function toDateFormat(dateString:string) {
    if(dateString.length < 8) return dateString;
    const date = new Date(Number(dateString));
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}