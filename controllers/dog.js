// Ordinarily you'd use model functions to get things, but I'm leaving that out for brevity

module.exports = {
  get() {
    return new Promise((resolve) => {
      resolve({
        id: 1,
        name: 'Fido'
      })
    });
  },

  getAll() {
    return new Promise((resolve) => {
      resolve([
        {
          id: 1,
          name: 'Fido'
        },
        {
          id: 2,
          name: 'Rover'
        }
      ])
    });
  }
}
