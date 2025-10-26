class LogInPage extends BasePage{

    constructor(){
        this.usernameInputBox=locator("//input[]")
        this.passwordInputBox=locator("//input[]")
        this.loginButton=locator("//input]")
    }

    enterPassword(input){
        this.passwordInputBox.fill(input)
    }

    enterUsername(input){
        this.usernameInputBox.fill(input)
    }
    clickLoginButton(){
        this.loginButton.click()
    }

    Worker(){
console.log(`this`);
}
}



