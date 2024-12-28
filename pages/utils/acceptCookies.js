async function getCookieButton(page) {
    return page.getByText('Agree').last()
}

async function acceptCookies(page) {
    const cookieButton = page.getByText('Agree').last()
    if (await cookieButton.isVisible()) {
        await cookieButton.click()
    }
}
module.exports = { acceptCookies, getCookieButton }