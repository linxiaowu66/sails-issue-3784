module.exports = {

  attributes: {
   name:{type: 'string'},
    /*Article to tags is a many-to-many association*/
    tags: {
      collection: 'Tags',
      via: 'articles',
      dominant: true
    }
   
  },
};
