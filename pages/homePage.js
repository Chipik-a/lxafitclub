export class HomePage {
    constructor(page) {
        this.page = page
        this.singUpBottun = page.getByText('ЗАРЕЄСТРУВАТИСЯ')
        // this.cookieButton = page.getByText('Agree').last() // вынесли в acceptCookies.js
        this.instantAccessButton = page.getByText('GET INSTANT ACCESS').last()
        this.coursesButton = page.getByText('Курси')
    }
    async goto(url) {
        await this.page.goto(url);
    }

}