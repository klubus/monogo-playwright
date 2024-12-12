import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { ProductPage } from '../src/pages/product.page';

test.describe("product testing", () => {
  
  test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.confirmCookiesAndAge();
  });
test('adding product to the cart', async ({ page }) => {
// Arrange
const homePage = new HomePage(page);
const productPage = new ProductPage(page);
const expectedConfirmation = 

// Act
  await homePage.seeAllProducts();
  await productPage.productPloomXAdvanced.click();
  await productPage.addProductToCart.click();
  //await page.getByTestId('miniCartCheckoutButton').click();

  // Assert
  //await expect(page.locator()).toHaveText('')
});

test('removing product from the cart', async ({ page }) => {
  const locator = page.locator('//div[@data-sku="ploom-x-advanced"]')

  await page.locator('.icon--chevron').first().click();
  await page.getByRole('link', { name: 'See all the products' }).first().click();
  await locator.click();
  await page.getByTestId('pdpAddToProduct').click();
  await page.getByTestId('miniCartCheckoutButton').click();
  await page.getByTestId('regular-cart-list').getByTestId('cartRemoveButton').click();
  await page.getByTestId('remove-item-submit-button').click();
});

test('checking broken links or images on the prodouct page', async ({ page }) => {
  
  // Arrange
  const locator = page.locator('//div[@data-sku="ploom-x-advanced"]')

  async function getAllLinksFromPage(page: Page){
    const links = page.getByRole("link")
    const allLinks = await links.all()
    const allHrefs = await Promise.all(allLinks.map((link) => link.getAttribute("href")))

    const allValidHrefs = allHrefs.reduce((links,link) => {
      expect.soft(link).toBeTruthy()
      if (link?.includes('https')){}
        else{link = "https://www.ploom.co.uk" + link;}
      console.log(link)
      if (link) links.add(link)
        return links
      }, new Set<string>())
      return allValidHrefs
    }

    await page.locator('.icon--chevron').first().click();
    await page.getByRole('link', { name: 'See all the products' }).first().click();
    await locator.click();
    const linkUrls = await getAllLinksFromPage(page)
    console.log(linkUrls)

    for (const url of linkUrls) {
      try {
        const response = await page.request.get(url)
        expect.soft(response.ok()).toBeTruthy()
      } catch {
        expect.soft(null, `${url} is not ok`).toBeTruthy()
      }
    }

    await page.waitForLoadState('domcontentloaded');
    const images = page.locator('img');
    console.log(await images.count());
    const allImages = await images.all();

    for await(const img of allImages) {
     await expect(img).toHaveJSProperty('complete', true);
    }
  })
});