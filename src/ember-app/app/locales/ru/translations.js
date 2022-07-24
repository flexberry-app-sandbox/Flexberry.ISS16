import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s16',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s16',
          title: 'I s s16'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s16-вид-поддержки-l': IISISS16ВидПоддержкиLForm,
    'i-i-s-i-s-s16-условие-l': IISISS16УсловиеLForm,
    'i-i-s-i-s-s16-вид-поддержки-e': IISISS16ВидПоддержкиEForm,
    'i-i-s-i-s-s16-условие-e': IISISS16УсловиеEForm
  },

});

export default translations;
