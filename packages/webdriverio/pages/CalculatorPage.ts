import { BasePage, By2 } from './BasePage';

class CalculatorPage extends BasePage {
	isPageLoaded() {
		return this.number4Button.isDisplayed();
	}

	private get number4Button() {
		return By2.nativeName('Four');
	}

	// private get equalButton() {
	// 	return By2.nativeAccessibilityId('equalButton');
	// }
	//
	// private get plusButton() {
	// 	return By2.nativeAccessibilityId('plusButton');
	// }

	async calculate4Plus8() {
		//Using Name
		let buttonFour = await $('[name="Four"]');
		let buttonPlus = await $('[name="Plus"]');
		let buttonEight = await $('[name="Eight"]');
		let buttonEqual = await $('[name="Equals"]');

		buttonFour.click();
		await browser.pause(1000);

		buttonPlus.click();
		await browser.pause(1000);

		buttonEight.click();
		await browser.pause(1000);

		buttonEqual.click();
		await browser.pause(1000);
	}

	async getCalculatorResults(): Promise<String> {
		let calculatorResults = await $('~CalculatorResults');

		let text = await calculatorResults.getText();
		let replacedText = text.replace('Display is', '').trim();

		return replacedText;
	}
}

export default new CalculatorPage();
