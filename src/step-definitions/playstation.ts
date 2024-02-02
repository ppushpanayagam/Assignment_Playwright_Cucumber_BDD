import {Given} from '@cucumber/cucumber';



Given(
    /^the user on the play station page$/,
    async function() {

        const {
            screen: {page},
        } = this;

        console.log("I am on the Play station home page");

        await page.goto("https://www.sony.co.uk/")

    }
)