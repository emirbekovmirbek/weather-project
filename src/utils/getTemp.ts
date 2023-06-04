export const getTemp = (unit: string, temp: number):number => {
  return unit === 'metric' ? Math.ceil(temp) : Math.ceil(temp * 9 / 5 + 32)
}