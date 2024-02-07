import {Given, When} from '@cucumber/cucumber';


Given(
    /^the user log into Sony application with valid credentials$/,
    async function() {

        const {
            screen: {page},
        } = this;

        console.log("I am on the Play station home page");

        await page.goto("https://www.sony.co.uk/")

        const acceptButton = await page.locator('#onetrust-button-group>button:last-child');
        await acceptButton.waitFor({state: "visible"})
        if(await acceptButton.isVisible()){
            await acceptButton.click();
        }
    }
)

When(
    /^the user select playstation from the menu$/,
    async function() {

        const {
            screen: {page, context},
        } = this;

        console.log("I am on the Play station home page");

        await page.locator('.GlobalHeaderNavi>button').click();
    
        const listOfMenu = await page.$$('.GlobalHeaderNavi__NavListInner>ul>li>a');
        console.log(listOfMenu.length);

    
        const pagePromise = context.waitForEvent('page');

        for(const menu of listOfMenu){
            let subMenu = await menu.textContent();
            if(subMenu.includes('PlayStation')){
                await menu.click();
                break;
            }
        }

        global.playStationPage = await pagePromise;
        await global.playStationPage.waitForLoadState();

        const acceptButton_PlayStationPage = await global.playStationPage.locator('#_evidon-accept-button');
        await acceptButton_PlayStationPage.waitFor({state: "visible"})
        if(await acceptButton_PlayStationPage.isVisible()){
            await acceptButton_PlayStationPage.click();
        }

    }
)
