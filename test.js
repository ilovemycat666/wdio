const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    });

    await browser.url('https://www.gamestop.com/')

    const search = await browser.$('input[type="search"]');
    await search.click()

    await search.setValue('nintendo switch');
    browser.keys('Enter')

    const item = await browser.$('.product-tile-link');
    await item.click()

    const add = await browser.$('#add-to-cart')
    await add.click()

    await browser.pause(1000)
    await browser.url('https://www.gamestop.com/spcheckout/')

    const first = await browser.$('#shippingFirstName')
    await first.setValue('Ed')

    const last = await browser.$('#shippingLastName')
    await last.setValue('Reik')

    const address = await browser.$('#shippingAddressOne')
    await address.setValue('257 Sanford St')

    const zip = await browser.$('#shippingZipCode')
    await zip.setValue('14620')

    const city = await browser.$('#shippingAddressCity')
    await city.setValue('Rochester')

    const state = await browser.$('#shippingState')
    await state.setValue('New York')
    browser.keys('Enter')

    const email = await browser.$('#shipping-email')
    await email.setValue('ed@gmail.com')

    const phone = await browser.$('#shippingPhoneNumber')
    await phone.setValue('585-703-1895')

    const save = await browser.$('button[name="submit-shipping"]')
    await save.click()

    await browser.deleteSession();
})().catch((e) => console.error(e))
