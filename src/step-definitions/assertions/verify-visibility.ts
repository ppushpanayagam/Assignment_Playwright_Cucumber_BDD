import {Given, Then} from '@cucumber/cucumber';
import {expect} from "playwright/test";


Then(
    /^the user should be redirected  to playstation application$/,
    async function() {

        const {
            screen: {page},
        } = this;

        console.log("All the slides should be displayed");

        const content = await global.playStationPage.title();
        await expect(content).toBe("PlayStation® Official Site: Consoles, Games, Accessories & More");
    }
)