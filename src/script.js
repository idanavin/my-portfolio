requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../scripts'
    }
});

requirejs(['../scripts/main']);
requirejs(['../scripts/menu']);