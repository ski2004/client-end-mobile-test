

export default {
  // conf寫在這
  conf(f) {
    const option = {
      isBetween: ['min', 'max']
    }
    return option[f]
  },
  isBetween(value, { min, max } = {}) {
    return Number(min) <= value && Number(max) >= value;
  }
}
