import { languages } from "./base.data";

export enum cookiesGotIt {
  polish = "Akceptuj wszystkie pliki cookie",
  english = "GOT IT",
}

export enum confirmAge {
  polish = "Potwierdź",
  english = "Yes, discover more",
}

export enum seeProductsLocator {
  polish = "(//span[@class='aem-button__text'][normalize-space()='Zobacz wszystkie produkty'])[2]",
  english = "(//span[@class='aem-button__text'][normalize-space()='See all the products'])[1]",
}

export enum clickShopLocator {
  polish = "headerItem-1",
  english = "headerItem-0",
}

export const homeData = {
  [languages.english]: {
    seeProducts: seeProductsLocator.english,
    clickShopLocator: clickShopLocator.english,
    cookies: cookiesGotIt.english,
    confirmAge: confirmAge.english,
  },
  [languages.polish]: {
    seeProducts: seeProductsLocator.polish,
    clickShopLocator: clickShopLocator.polish,
    cookies: cookiesGotIt.polish,
    confirmAge: confirmAge.polish,
  },
};
