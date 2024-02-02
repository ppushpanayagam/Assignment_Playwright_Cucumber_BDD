import {Given} from '@cucumber/cucumber';



Given(
    /^the user on the play station page$/,
    async function() {

        console.log("I am on the Play station home page");

        await global.page.goto("https://www.sony.co.uk/")

    }
)