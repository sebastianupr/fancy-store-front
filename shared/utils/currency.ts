export function formatFiat(value: string | number): string {
  const options = { style: 'currency', currency: 'USD' };
  const currencyFormat = new Intl.NumberFormat('en-US', options);
  return currencyFormat.format(Number(value));
}