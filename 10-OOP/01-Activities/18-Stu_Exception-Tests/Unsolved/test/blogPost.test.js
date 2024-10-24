const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('Author Length', () => { 
    it('throws an error if name is less than 2 characters', () => {
      const cb = () => new BlogPost('e')
      const err = new Error('Author must be at least 2 characters long.');
      expect(cb).toThrowError(err)
    })
  })

  describe('Author Characters', () => {
    it('throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores', () => {
      const cb = () => new BlogPost('*^')
      const err = new Error('Author must only contain letters, numbers, dashes, and underscores.')
      expect(cb).toThrowError(err)
    })
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
});
