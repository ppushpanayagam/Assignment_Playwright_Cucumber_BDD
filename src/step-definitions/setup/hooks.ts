import { Before, After, ITestCaseHookParameter } from '@cucumber/cucumber';
import { env } from '../../env/parseEnv';
import { ScenarioWorld } from './world';

Before(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    console.log(`🥒 Running cucumber "${scenario.pickle.name}"`);

    const contextOptions = {

        recordVideo: {
            dir: './reports/videos/'+scenario.pickle.name,
        }
    
    }
    const ready = await this.init(contextOptions);
    return ready;
});

After(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    const {
        screen: { page, browser },
    } = this;
    const scenarioStatus = scenario.result?.status;

    if(scenarioStatus === 'FAILED'){
        const screenshot = await page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`
        })
        await this.attach(screenshot, 'image/png');
    }

    await browser.close();
    return browser;
   
});

