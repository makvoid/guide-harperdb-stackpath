'use strict'

const getQuotes = async (hdbCore) => {
  const request = {
    body: {
      operation: 'sql',
      sql: 'SELECT * FROM quotes.movies'
    }
  }
  const quotes = await hdbCore.requestWithoutAuthentication(request);
  return quotes
}

module.exports = {
  getQuotes
}
