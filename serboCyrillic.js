import serboCyrillicMessages from 'ra-language-serbo-cyrillic';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  'serbo-cyrillic': serboCyrillicMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'serbo-cyrillic');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>