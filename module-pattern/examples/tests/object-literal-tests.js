describe('Module Pattern', function() {

    describe('with Object Literal', function() {
        it('should be an object', function() {
            assert.isObject(myObject);
        });
        it('should have text property', function() {
            var testVariable = myObject.displayText;
            assert.isDefined(testVariable);
        });
        it('should have configuration object', function() {
            var testConfiguration = myObject.configuration;
            assert.isObject(testConfiguration);
            assert.isBoolean(testConfiguration.useCache);
            assert.isString(testConfiguration.language);
        });
        it('should display text', function() {
            var testSayMethod = myObject.showMessage();
            assert.equal(testSayMethod, 'This is a simple text to display');
        });
        it('should display configuration', function() {
            myObject.configuration = {
                useCache: false,
                language: 'en'
            };
            var testConfigDisplay = myObject.showConfiguration();

            assert.isFunction(myObject.showConfiguration);
            assert.equal(testConfigDisplay, 'Your caching option is disabled and your current language is EN');
        });
        it('should update configuration', function() {
            var testUpdateConfig = myObject;
            testUpdateConfig.updateConfiguration({
                useCache: false,
                language: 'bg'
            });
            assert.equal(testUpdateConfig.configuration.language, 'bg');
            assert.equal(testUpdateConfig.configuration.useCache, false);
        });
    });
});
