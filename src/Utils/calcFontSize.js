export const calcFontSize = (actualSize) => {
  const newSize = parseInt(actualSize) / 1.618

  return `${newSize}rem`
}
