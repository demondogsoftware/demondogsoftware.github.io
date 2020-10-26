export const state = () => ({
  services: [
    {
      id: 1,
      img: 'hosting_icon.png',
      alt: 'picture with 24 hour, computers, and the web in a circular pattern',
      description: 'DNS &vert; HOSTING'
    },
    {
      id: 2,
      img: 'database_icon.png',
      alt: 'computer with upload and download arrows connected to a database',
      description: 'DATABASE'
    }
  ]
})

export const mutations = {}

export const actions = {}

export const getters = {
  getServices (state) {
    return state.services
  }
}
