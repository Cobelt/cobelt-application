# umi-application server

## Performances

### Cache de requêtes Mongo

Il suffit de rajouter `.cache()` :

```javascript
db.User.find({ ... }).cache().exec(function() {});
```