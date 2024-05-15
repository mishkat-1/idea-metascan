export const toCents = (price: number | string) => Math.round(Number(price) * 100);

export const toDollars = (price: number | string) => Number((Number(price) / 100).toFixed(2));
