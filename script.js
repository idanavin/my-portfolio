requirejs.config({
    baseUrl: 'scripts',
    paths: {
        app: '../scripts'
    }
});

requirejs(['../scripts/main']);
requirejs(['../scripts/menu']);