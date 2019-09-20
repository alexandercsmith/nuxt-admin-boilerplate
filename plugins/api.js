export default ({ $axios }, inject) => {
  // Read - Items
  inject('readItems', model => {
    return $axios.$get(`${process.env.API_URL}/${model}`)
  })
  // Read - Item
  inject('readItem', (model, id) => {
    return $axios.$get(`${process.env.API_URL}/${model}/${id}`)
  })
  // Create - Item
  inject('createItem', (model, data) => {
    return $axios.$post(`${process.env.API_URL}/${model}`, data)
  })
  // Update - Item
  inject('updateItem', (model, id, data) => {
    return $axios.$put(`${process.env.API_URL}/${model}/${id}`, data)
  })
  // Delete - Item
  inject('deleteItem', (model, id) => {
    return $axios.$delete(`${process.env.API_URL}/${model}/${id}`)
  })
}
