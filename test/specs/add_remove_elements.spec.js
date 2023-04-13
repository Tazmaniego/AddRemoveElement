import AddRemovePage from "../pageobjects/add_remove_elements.page.js";

describe('My AddRemove Page', () => {
    it('should select input', async () => {
        await AddRemovePage.open();
        await browser.pause(3000);
        await (AddRemovePage).AddElement1.click();
        await browser.pause(1500);
        await (AddRemovePage).AddElement2.click();
        await browser.pause(1500);
        await (AddRemovePage).AddElement3.click();
        await browser.pause(1500);
        await (AddRemovePage).AddElement4.click();
        await browser.pause(1500);
        await (AddRemovePage).AddElement5.click();
        await browser.pause(3000);
        await (AddRemovePage).RemoveElement1.click();
        await browser.pause(1500);
        await (AddRemovePage).RemoveElement2.click();
        await browser.pause(3000);
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})