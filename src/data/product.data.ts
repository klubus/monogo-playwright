import { languages } from "./base.data";

export enum productAddedToCartInformationLocator {
  english = "(//div[@role='status'][normalize-space()='Product added to cart'])[2]",
  polish = "//div[@role='status']",
}

export const productData = {
  [languages.english]: {
    productAddedToCartInformationLocator:
      productAddedToCartInformationLocator.english,
  },
  [languages.polish]: {
    productAddedToCartInformationLocator:
      productAddedToCartInformationLocator.polish,
  },
};
