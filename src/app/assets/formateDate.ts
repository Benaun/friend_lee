export const formateDate = (date: number) => {
    const data = new Date(date);
    const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return formatter.format(data)
}
