import DS from 'ember-data';
import Ember from 'ember';
import { singularize } from 'ember-inflector';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },
  keyForRelationship: function(key) {
    return Ember.String.underscore(key);
  },
  // Our Phoenix API uses singularized model names
  payloadKeyFromModelName(modelName) {
    return singularize(modelName);
  },
});
