import {Given, Then, When} from '@cucumber/cucumber';
import { expect } from 'playwright/test';


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

When(
    /^the user on the playstation home page$/,
    async function() {

        const {
            screen: {page, context},
        } = this;

        const content = await global.playStationPage.title();
        await expect(content).toBe("PlayStation® Official Site: Consoles, Games, Accessories & More");
    }
)

When(
    /^the carousel slides should be displayed as expected$/,
    async function() {

        const playStationPage = global.playStationPage;
        const listOfSlideItems = await playStationPage.$$('div.slider__control>div>div>figure>picture>img');
        
        // listOfTiles.rep
        var tilesCount = listOfSlideItems.length;
        const arr = ['Tekken 8 keyart', 'February LNY Sale keyart', 'Like A Dragon keyart', 'TLOU keyart', 
                    'Sterling Silver DualSense Wireless Controller product shot', 'genshin impact keyart', 
                        'Suicide Squad keyart'];
        
        var count = 0;
        for(const menu of listOfSlideItems){

            expect (await menu.getAttribute('alt')).toBe(arr[count]);
            count = count + 1;
        }
    
    }
)

When(
    /^the user select the slides only by one$/,
    async function() {

        const {
            screen: {page, context},
        } = this;

        const playStationPage = global.playStationPage;

        const listOfSlideItems = await playStationPage.$$('div.slider__control>div>div>figure>picture>img');
        var listOfTiles = 'div.slider__control:nth-child('+'*'+') > div:nth-child(1) > div';
        var listOfBigBanners = 'div.slider__slides:nth-child(1) > div:nth-child('+'*'+') > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div>div';
        
        // listOfTiles.rep
        var tilesCount = listOfSlideItems.length;
        
        const screenShots = 
                        [ 'Tekken8keyart.png', 'SuicideSquadkeyart.png', 'FebruaryLNYSalekeyart.png', 'LikeADragonkeyart.png', 
                            'TLOUkeyart.png', 'SterlingSilver.png', 'genshinimpactkeyart.png', 'Applekeyart.png'
                        ];
        
        var screenCount = 0;
        for(let i:number = 1; i <= tilesCount; i++){
            const item = i.toString();
            await playStationPage.locator(listOfTiles.replace('*', item)).click();
            await expect(playStationPage.locator(listOfBigBanners.replace('*', item)))
                    .toHaveScreenshot(
                        screenShots[screenCount]
                    );
            screenCount = screenCount+1;
        }
    }
)

Then(
    /^the carousel slides should move one by one automatically$/,
    async function() {

        const {
            screen: {page, context},
        } = this;

        
        

    }
)


async function clickOnSpecificSlide (listOfSlide, slideToSelect){

    for(const slide of listOfSlide){
        const str = await slide.textContent();
        if(str === slideToSelect){
            await slide.click();
        }
    }
}

async function verifySelectedAndNonSelectedSlides(listOfSlide, selectedSlide){
    
    for(const slide of listOfSlide){
        const str = await slide.textContent();
        if(str !== selectedSlide){
            const attributeVal = await slide.getAttribute('class');
            expect(attributeVal).not.toContain('is-selected');   
        }else{
            expect(await slide.getAttribute('class')).toContain('is-selected');
        }
    }
}

When(
    /^the user select a specific tiles from carousel slides$/,
    async function() {

        const {
            screen: {page, context},
        } = this;

        const playStationPage = global.playStationPage;
        const listOfSlides = await playStationPage.$$('div.slider__control');
        console.log(listOfSlides.length);
        let count = 1;
        
        const slideToSelect = 'Tekken 8 keyart';

        clickOnSpecificSlide(listOfSlides, slideToSelect);
        verifySelectedAndNonSelectedSlides(listOfSlides, slideToSelect);
    }
)