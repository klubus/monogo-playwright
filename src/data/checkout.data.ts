import { languages } from "./base.data";

export enum emptyCartInformationText {
  english = "You have no items in your shopping cart at the moment.",
  polish = "W tym momencie Twój koszyk jest pusty.",
}

export const checkoutData = {
  [languages.english]: {
    emptyCartInformationText: emptyCartInformationText.english,
  },
  [languages.polish]: {
    emptyCartInformationText: emptyCartInformationText.polish,
  },
};
