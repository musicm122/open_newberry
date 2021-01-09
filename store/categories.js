const state = () => ({
  categories: [
    {
      id: 1,
      name: 'Improvement',
      description: 'Something that should be fixed or updated',
      enabled: true,
    },
    {
      id: 2,
      name: 'Donation',
      description: 'Cause to donate to',
      enabled: true,
    },
    {
      id: 3,
      name: 'Volunteer',
      description: 'Help out a cause',
      enabled: true,
    },
    {
      id: 4,
      name: 'Inform',
      description: 'FYI',
      enabled: true,
    },
    {
      id: 5,
      name: 'Event',
      description: 'Event',
      enabled: true,
    },
  ],
})

const mutations = {
  add(state, categories) {
    state.categories.push(categories)
  },
  remove(state, post) {
    state.categories.splice(state.categories.indexOf(post), 1)
  },
  edit(state, post) {
    const selectedIndex = state.categories.findIndex((p) => p.id === post.id)
    state.categories[selectedIndex] = post
  },
}

const getters = {
  allCategories(state) {
    return state.categories
  },
  activeCategories(state) {
    return state.categories.filter((c) => c.enabled === true)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
