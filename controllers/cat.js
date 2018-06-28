// Ordinarily you'd use model functions to get things, but I'm leaving that out for brevity

module.exports = {
  get() {
    return new Promise((resolve) => {
      resolve({
        id: 1,
        name: 'Mittens'
      })
    });
  },

  getAll() {
    return new Promise((resolve) => {
      resolve([
        {
          id: 1,
          name: 'Mittens'
        },
        {
          id: 2,
          name: 'Scratchy'
        }
      ])
    });
  }
}
