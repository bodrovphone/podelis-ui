export const matchMedia = (query) => {
  let result;
  if (typeof window !== "undefined") {
    result = window.matchMedia(`(${query})`).matches;
  } else {
    result = false;
  }
  return result;
};
