const assert             = require('assert');
const { isSerializable } = require('./');


describe('isSerializable', () => {
    it('Should return true for a regular object', () => {
        assert.ok(isSerializable({ foo: 'bar' }));
    });
})