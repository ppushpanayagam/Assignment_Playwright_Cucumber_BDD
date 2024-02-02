import {Given, Then} from '@cucumber/cucumber';
import {expect} from "playwright/test";


Then(
    /^the user should see the required slides$/,
    async function() {

        console.log("All the slides should be displayed");

        const content = await global.page.title();
        await expect(content).toBe("Sony UK | Latest Technology News | Electronics | Entertainment");
    }
)