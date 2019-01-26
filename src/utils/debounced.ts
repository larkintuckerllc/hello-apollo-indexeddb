const debounced = (delay: number, fn: (...args: any) => any) => {
  let timerId: NodeJS.Timeout | null;
  return (...args: any) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};

export default debounced;
