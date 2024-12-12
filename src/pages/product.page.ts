import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage{
    constructor(page: Page){
        super(page)
    }
    url = ''

    productPloomXAdvanced = this.page.locator('//div[@data-sku="ploom-x-advanced"]')
    addProductToCart = this.page.getByTestId('pdpAddToProduct')
   //await page.getByTestId('miniCartCheckoutButton').click();
    

    // async confirmCookiesAndAge(): Promise<void> {
    //     await this.cookiesGotIt.click();
    //     await this.confirmAgeVerification.first().click();
    //}
    //}
}