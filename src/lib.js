const getFieldNames = require('graphql-list-fields')

const filterOutHidden = field => (field.indexOf('__') > -1)

module.exports = transformAstToFieldSpecifiers = (ast, filterOut = filterOutHidden) => {
  return getFieldNames(ast).reduce((specifiers, field) => {
    if (filterOut(field)) return specifiers

    return {
      ...specifiers,
      [field]: 1,
    }
  }, {})
}
