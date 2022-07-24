import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  описание: DS.attr('string'),
  наименование: DS.attr('string'),
  номерПоддержки: DS.attr('string')
});

export let ValidationRules = {
  описание: {
    descriptionKey: 'models.i-i-s-i-s-s16-вид-поддержки.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s16-вид-поддержки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s16-вид-поддержки.validations.номерПоддержки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидПоддержкиE', 'i-i-s-i-s-s16-вид-поддержки', {
    описание: attr('Описание', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерПоддержки: attr('Номер поддержки', { index: 2 })
  });

  modelClass.defineProjection('ВидПоддержкиL', 'i-i-s-i-s-s16-вид-поддержки', {
    описание: attr('Описание', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерПоддержки: attr('Номер поддержки', { index: 2 })
  });
};
