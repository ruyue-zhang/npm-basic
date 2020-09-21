import {transform} from "../src/romanizer";

describe('transform', () => {
    it('should return X when input number', () => {
        const formatted = transform(10);

        expect(formatted).toEqual('X');
    });
});