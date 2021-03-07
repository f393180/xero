module.exports = {
  getOffset: (currentPage = 1, listPerPage) => (currentPage - 1) * [listPerPage],
  emptyOrRows: (rows) => ((!rows) ? [] : rows),
  getFirstObj: (rows) => ((!rows[0]) ? {} : rows[0]),
  isObjectEmpty: (obj) => Object.getOwnPropertyNames(obj).length === 0,
};
