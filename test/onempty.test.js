describe('Array.onEmpty test',function () {
    it('callback  should be called on empty array', function () {
        var spy = sinon.spy();
        [].onEmpty(spy);
        expect(spy.calledOnce).toBe(true)
    });

    it('callback should not be called on not empty array', function () {
        var spy = sinon.spy();
        [1].onEmpty(spy);
        expect(spy.called).toBe(false)
    });

    it('should return the array that onEmpty was invoked on', function () {
        expect([].onEmpty(function () {}).length).toBe(0);
        expect([1].onEmpty(function () {}).length).toBe(1);
    });


});