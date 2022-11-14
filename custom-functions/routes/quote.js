'use strict';

const { getQuotes } = require('../helpers/quotes')

module.exports = async (server, { hdbCore, logger }) => {
  // Get all quotes
  server.route({
    url: '/',
    method: 'GET',
    handler: async (request) => {
      const quotes = await getQuotes(hdbCore)
      return quotes
    }
  })

  // Get a single quote
  server.route({
    url: '/single',
    method: 'GET',
    handler: async (request) => {
      const quotes = await getQuotes(hdbCore)
      return quotes[Math.floor(Math.random()*quotes.length)]
    }
  })
}
