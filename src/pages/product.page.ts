import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { actualLanguage } from "../../tests/product.spec";
import { productData } from "../data/product.data";

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  //url = "";

  protected _actualLanguage = actualLanguage;
  private productDataLanguages = productData[this._actualLanguage];

  productPloomXAdvanced = this.page.locator(
    '//div[@data-sku="ploom-x-advanced"]',
  );

  productPloomXAdvancedRoseShimmer = this.page.locator(
    '//div[@data-sku="16199177"]',
  );

  productAddedToCartInformation = this.page.locator(
    this.productDataLanguages.productAddedToCartInformationLocator,
  );

  addProductToCart = this.page.getByTestId("pdpAddToProduct");

  miniCartCheckoutButton = this.page.getByTestId("miniCartCheckoutButton");
}
