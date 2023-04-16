import { IntlProvider } from "react-intl";

import messagesInPolish from "../../../../lang/pl.json";

export default function CustomIntlProvider({ children }) {
  // TODO Context z mozliwoscia zmainy locale messages
  return (
    <IntlProvider messages={messagesInPolish} locale="pl" defaultLocale="pl">
      {children}
    </IntlProvider>
  );
}
