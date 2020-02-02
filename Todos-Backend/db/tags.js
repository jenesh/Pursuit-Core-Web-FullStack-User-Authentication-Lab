const { db } = require("./pgp");

const createTag = (newTag) => {
  return db.one(
    'INSERT INTO tags(name, owner_id) VALUES($/name/, $/owner_id/) RETURNING *',
    newTag
  )
}

module.exports = {
  createTag 
};
