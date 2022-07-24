import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS16ВидПоддержкиLForm from './forms/i-i-s-i-s-s16-вид-поддержки-l';
import IISISS16УсловиеLForm from './forms/i-i-s-i-s-s16-условие-l';
import IISISS16ВидПоддержкиEForm from './forms/i-i-s-i-s-s16-вид-поддержки-e';
import IISISS16УсловиеEForm from './forms/i-i-s-i-s-s16-условие-e';
import IISISS16ВидПоддержкиModel from './models/i-i-s-i-s-s16-вид-поддержки';
import IISISS16УсловиеModel from './models/i-i-s-i-s-s16-условие';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s16-вид-поддержки': IISISS16ВидПоддержкиModel,
    'i-i-s-i-s-s16-условие': IISISS16УсловиеModel
  },

  'application-name': 'I s s16',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s16',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s16',
          title: 'I s s16'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s16': {
          caption: 'ISS16',
          title: 'ISS16',
          'i-i-s-i-s-s16-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          },
          'i-i-s-i-s-s16-условие-l': {
            caption: 'Условие',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s16-вид-поддержки-l': IISISS16ВидПоддержкиLForm,
    'i-i-s-i-s-s16-условие-l': IISISS16УсловиеLForm,
    'i-i-s-i-s-s16-вид-поддержки-e': IISISS16ВидПоддержкиEForm,
    'i-i-s-i-s-s16-условие-e': IISISS16УсловиеEForm
  },

});

export default translations;
