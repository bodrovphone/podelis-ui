export const matchMedia = (query: string): boolean => {
  let result: boolean;
  if (typeof window !== "undefined") {
    result = window.matchMedia(`(${query})`).matches;
  } else {
    result = false;
  }
  return result;
};

export const getEnding = (period: number, units: boolean): string => {
  let word: string;

  if (period % 100 !== 11 && (period % 100) % 10 === 1) {
    word = units ? "день" : "час";
  } else if (
    period > 1 &&
    period !== 11 &&
    (period < 5 || period % 10 < 5) &&
    period % 10 !== 0
  ) {
    word = units ? "дня" : "часа";
  } else {
    word = units ? "дней" : "часов";
  }

  const result = period > 1 ? `${period} ${word}` : word;

  return result;
};
