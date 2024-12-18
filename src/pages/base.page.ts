import { expect, Page } from "@playwright/test";
import { currentLanguageWebsite } from "../data/base.data";
import { actualLanguage } from "../../tests/product.spec";

export class BasePage {
  protected _actualLanguage = actualLanguage;
  protected websitelanguage = currentLanguageWebsite[this._actualLanguage];

  url = this.websitelanguage.language;
  constructor(protected page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
  async title(): Promise<string> {
    return await this.page.title();
  }

  async getAllLinksFromPage(page: Page) {
    const links = page.getByRole("link");
    const allLinks = await links.all();
    const allHrefs = await Promise.all(
      allLinks.map((link) => link.getAttribute("href"))
    );

    const allValidHrefs = allHrefs.reduce((links, link) => {
      expect.soft(link).toBeTruthy();

      // eslint-disable-next-line no-empty
      if (link?.includes("https")) {
      } else {
        link = "https://www.ploom.co.uk" + link;
      }

      if (link) links.add(link);
      return links;
    }, new Set<string>());

    return allValidHrefs;
  }

  async getAllImages(page: Page) {
    await page.waitForLoadState("domcontentloaded");
    const images = page.locator("img");
    const allImages = await images.all();
    return allImages;
  }
}
