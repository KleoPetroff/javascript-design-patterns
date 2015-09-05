describe('Module Pattern', function() {

    describe('with Object Liretal', function() {
        it('should be an object', function() {
            var testObject = myObject;
            assert.isObject(testObject);
        });
        it('should have text property', function() {
            var testVariable = myObject.displayText;
            expect(testVariable).to.be.ok;
        });
        it('should have configuration object', function() {
            var testConfiguration = myObject.configuration;
            assert.isObject(testConfiguration);
            assert.isBoolean(testConfiguration.useCache);
            assert.isString(testConfiguration.language);
        });
        it('should display text', function() {
            var testSayMethod = myObject.showMessage();
            expect(testSayMethod).to.be.equal('This is a simple text to display');
        });
        it('should display configuraion', function() {
            myObject.configuration = {
                useCache: false,
                language: 'en'
            };
            var testConfigDisplay = myObject.showConfiguration();

            assert.isFunction(myObject.showConfiguration);
            expect(testConfigDisplay).to.be.equal('Your caching option is disabled and your current language is EN');
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
