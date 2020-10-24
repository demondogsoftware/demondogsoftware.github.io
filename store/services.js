export const state = () => ({
  services: [
    {id: 01, img: "hosting_icon.png", alt: "picture with 24 hour, computers, and the web in a circular pattern", description: "DNS | HOSTING"},
    {id: 02, img: "database_icon", alt: "computer showing uploading and downloading screen to database in cloud", description: "DATABASES"},
    {id: 03, img: "social_icon", alt: "computer screen showing microphone, email, and social media", description: "SEO | SOCIAL"}
  ]
})

export const mutations = {}

export const actions = {}

export const getters = {
  getServices (state) {
    return state.services
  }
}
