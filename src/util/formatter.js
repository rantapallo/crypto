export const curFormatter = (val, currency) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: currency,
}).format(val)

export const intFormatter = (int) => new Intl.NumberFormat('en-US').format(int)
