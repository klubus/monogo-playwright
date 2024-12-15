import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../src/pages/home.page";
import { ProductPage } from "../src/pages/product.page";
import { CheckoutPage } from "../src/pages/checkout.page";
import { languages } from "../src/data/base.data";

// here you can set language test
// current available languages:
// english - languages.english
// polish - languages.polish
export const actualLanguage = languages.english;

test.describe("product testing", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.confirmCookiesAndAge();
  });
  test("adding product to the cart", async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    // Act
    await homePage.seeAllProducts();
    await productPage.productPloomXAdvanced.click();
    // in PL version test won't work because there is no such product, change to other one (productPloomXAdvancedRoseShimmer)

    await productPage.addProductToCart.click();

    // Assert
    await expect(productPage.productAddedToCartInformation).toBeVisible();
  });

  test("removing product from the cart", async ({ page }) => {
    // Arranges
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Act
    await homePage.seeAllProducts();
    await productPage.productPloomXAdvanced.click();
    // in PL version test won't work because there is no such product, change to other one (productPloomXAdvancedRoseShimmer)

    await productPage.addProductToCart.click();
    await productPage.miniCartCheckoutButton.click();
    await checkoutPage.removeOneItem();

    // Assert
    await expect(checkoutPage.emptyCartInformationLocator).toContainText(
      checkoutPage.nazwa
    );
  });

  test("checking broken links or images on the prodouct page", async ({
    page,
  }) => {
    // Arrange
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const allImages = await productPage.getAllImages(page);
    const linkUrls = await productPage.getAllLinksFromPage(page);

    // Act
    await homePage.seeAllProducts();
    await productPage.productPloomXAdvanced.click();
    // in PL version test won't work because there is no such product, change to other one (productPloomXAdvancedRoseShimmer)

    // Assert
    await test.step("checking broken images", async () => {
      for (const img of allImages) {
        await expect(img).toHaveJSProperty("complete", true);
      }
    });

    await test.step("checking broken links", async () => {
      for (const url of linkUrls) {
        try {
          const response = await page.request.get(url);
          expect.soft(response.ok()).toBeTruthy();
        } catch {
          expect.soft(null, `${url} is not ok`).toBeTruthy();
        }
      }
    });
  });
});
