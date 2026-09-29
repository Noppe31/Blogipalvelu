export function max(a, b) {
	if (a > b) return a;
	else if (b > a) return b;
	return a;
}

import { describe,test,it,expect } from "vitest";

describe('max', () => {
	it('should return the max of two numbers', () => {
		const a = 1;
		const b = 2;
		const result = max(a, b);
		
		expect(result).toBe(2)
	});




});