import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  нименование: DS.attr('string'),
  номерПоддержки: DS.attr('string')
});

export let ValidationRules = {
  нименование: {
    descriptionKey: 'models.i-i-s-i-s-s16-условие.validations.нименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s16-условие.validations.номерПоддержки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УсловиеE', 'i-i-s-i-s-s16-условие', {
    нименование: attr('Нименование', { index: 0 }),
    номерПоддержки: attr('Номер поддержки', { index: 1 })
  });

  modelClass.defineProjection('УсловиеL', 'i-i-s-i-s-s16-условие', {
    нименование: attr('Нименование', { index: 0 }),
    номерПоддержки: attr('Номер поддержки', { index: 1 })
  });
};
