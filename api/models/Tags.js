module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    articles: {
      collection: 'article',
      via: 'tags'
    },
  },
};
