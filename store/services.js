export const state = () => ({
  services: [
    {
      id: 1,
      img: 'hosting_icon.png',
      alt: 'picture with 24 hour, computers, and the web in a circular pattern',
      description: 'HOSTING'
    },
    {
      id: 2,
      img: 'database_icon.png',
      alt: 'computer with upload and download arrows connected to a database',
      description: 'DATABASES'
    },
    {
      id: 3,
      img: 'social_icon.png',
      alt: 'computer screen with social media, email and microphone displayed',
      description: 'SEO'
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
