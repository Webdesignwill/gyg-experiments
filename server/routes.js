const routes = require('express').Router()
const viewConfig = require('./viewConfig')

const {
  pages,
  components,
} = viewConfig

routes.get('/', (req, res) => res.render('index', {
  pages,
  components,
}))

for(let i = 0; i < pages.length; i++) {
  routes.get(`/pages/${pages[i]}`, (req, res) => {
    res.render('pages/', {
      file: pages[i]
    })
  })
}

for(let i = 0; i < components.length; i++) {
  routes.get(`/components/${components[i]}`, (req, res) => {
    res.render('components/', {
      file: components[i]
    })
  })
}

module.exports = routes
