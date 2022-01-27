export const parseEventNum = (event: any) => {
    const num = parseInt((event.target as any).value);
    return isNaN(num) ? 0 : num
}