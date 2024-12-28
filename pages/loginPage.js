import {testUser} from "../data/userData.js";

export class LoginPage {
    constructor(page) {
        this.page = page
        this.emailInput = page.getByRole('textbox', {name: 'Add your email address here'})
        this.passwordInput = page.getByRole('textbox', {name: 'Add your password here'})
        this.loginButton = page.getByText('Log in').last()
        this.coursesButton = page.getByText('Курси')

    }

    async login(testUser) {
        await this.emailInput.fill(testUser.email)
        await this.passwordInput.fill(testUser.password)
        await this.loginButton.click()
    }

    async goto(url) {
        await this.page.goto(url)
    }
}
console.log('Test User Email:', testUser.email);
console.log('Test User Password:', testUser.password);
