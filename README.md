# Join Mongo

[Tiny](https://github.com/matteodem/join-mongo/blob/master/src/lib.js) package to transform your GraphQL query into MongoDB field specifiers.

Heavily inspired by [join-monster](https://www.npmjs.com/package/join-monster) and
dependent on [graphql-list-fields](https://www.npmjs.com/package/graphql-list-fields).

```js
import { mongoDbCollection } from '...'
import transformAstToFieldSpecifiers from 'join-mongo'

export const myAwesomeResolver = (root, args, context, ast) => {
  return mongoDbCollection.find({}, {
    fields: transformAstToFieldSpecifiers(ast),
  })
}
```
