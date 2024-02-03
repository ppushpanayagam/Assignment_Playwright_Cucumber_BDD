import { Page } from 'playwright';
import { expect } from 'playwright/test';


export const navigateToSonyApplication = async (
    page: Page,
    url: string
): Promise<void> => {
   await page.goto(url);
};

export const verifySonyPageTitle = async (
    page: Page,
    expectedValue: string
): Promise<void> => {
    expect(await page.title()).toBe(expectedValue);
};

export const clickElement = async (
    page: Page,
    elementIdentifier: string
): Promise<void> => {
        await page.click(elementIdentifier);
};

export const inputValue = async (
    page: Page,
    elementIdentifier: string,
    input: string
): Promise<void> => {
    await page.focus(elementIdentifier);
    await page.fill(elementIdentifier, input);
};
