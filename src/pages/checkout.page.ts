import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { actualLanguage } from "../../tests/product.spec";
import { checkoutData } from "../data/checkout.data";

export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  //url = "";

  protected _actualLanguage = actualLanguage;
  private checkoutDataLanguages = checkoutData[this._actualLanguage];

  removeFirstItem = this.page
    .getByTestId("regular-cart-list")
    .getByTestId("cartRemoveButton");
  submitRemovingItem = this.page.getByTestId("remove-item-submit-button");
  emptyCartInformationLocator = this.page.locator(
    "//div[@class='CartItemList-module-emptyMessage-C5SnM']",
  );
  nazwa = this.checkoutDataLanguages.emptyCartInformationText;

  async removeOneItem(): Promise<void> {
    await this.removeFirstItem.click();
    await this.submitRemovingItem.click();
  }
}
