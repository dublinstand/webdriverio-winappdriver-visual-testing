/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import CalculatorPage from '../pages/CalculatorPage';
// import browser from '@wdio/globals';

describe('Samples', () => {
	// beforeEach(() => {
	// 	CalculatorPage.waitForPageLoaded();
	// });

	it('Calculate is 4 plus 8 equals 12', async () => {
		await CalculatorPage.calculate4Plus8();

		await browser.saveScreen('examplePaged');

		expect(await CalculatorPage.getCalculatorResults()).toBe('12');
	});
});
