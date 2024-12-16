import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { homeData } from "../data/home.data";
import { actualLanguage } from "../../tests/product.spec";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  protected _actualLanguage = actualLanguage;
  private homeDataLanguages = homeData[this._actualLanguage];

  async confirmCookiesAndAge(): Promise<void> {
    await this.page
      .getByRole("button", { name: this.homeDataLanguages.cookies })
      .click();
    await this.page
      .locator("span")
      .filter({ hasText: this.homeDataLanguages.confirmAge })
      .first()
      .click();
  }

  async seeAllProducts(): Promise<void> {
    await this.page
      .getByTestId(this.homeDataLanguages.clickShopLocator)
      .click();
    await this.page.locator(this.homeDataLanguages.seeProducts).click();
  }
}
