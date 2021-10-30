export function conditionalFormattedCelciusToFahrenheit(
  celcius: number,
  convert: boolean = false
): string {
  if (convert) {
    return `${Math.round(celcius * (9 / 5) + 32)}˚F`;
  }
  return `${Math.round(celcius)}˚C`;
}

export function conditionalCelciusToFahrenheit(
  celcius: number,
  convert: boolean = false
): number {
  if (convert) {
    return Math.round(celcius * (9 / 5) + 32);
  }
  return Math.round(celcius);
}
