import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage{
    constructor(page: Page){
        super(page)
    }
    url = 'https://www.ploom.co.uk/en'

    cookiesGotIt = this.page.getByRole('button', { name: 'GOT IT' })
    confirmAgeVerification = this.page.locator('span').filter({ hasText: 'Yes, discover more' })
    shopNavigationArrow = this.page.locator('.icon--chevron').first()

    async confirmCookiesAndAge(): Promise<void> {
        await this.cookiesGotIt.click();
        await this.confirmAgeVerification.first().click();
    }

    async seeAllProducts(): Promise<void>{
    await this.shopNavigationArrow.click();
    await this.page.getByRole('link', { name: 'See all the products' }).first().click();
    }
}