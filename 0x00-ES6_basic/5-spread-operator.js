export default function concatArrays(...args) {
  return args.reduce((result, current) => {
    if (Array.isArray(current)) {
      return [...result, ...current];
    } else if (typeof current === 'string') {
      return [...result, ...current.split('')];
    }
    return result;
  }, []);
}
