'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /api/v1/recipes/{recipeId}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "Recipe returned"', function() {
            var response = request('get', 'http://localhost:5000/api/v1/recipes/culpamagna', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond default for "unexpected error"', function() {
            var response = request('get', 'http://localhost:5000/api/v1/recipes/anim', { 
                'time': true
            });

            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 204 for "recipe deleted"', function() {
            var response = request('delete', 'http://localhost:5000/api/v1/recipes/quiscillum', { 
                'time': true
            });

            expect(response).to.have.status(204);
            return chakram.wait();
        });


        it('should respond default for "unexpected error"', function() {
            var response = request('delete', 'http://localhost:5000/api/v1/recipes/Ut', { 
                'time': true
            });

            return chakram.wait();
        });
    
    });
    
    describe('tests for put', function() {
        it('should respond 204 for "recipe updated"', function() {
            var response = request('put', 'http://localhost:5000/api/v1/recipes/inExcepteur', { 
                'time': true
            });

            expect(response).to.have.status(204);
            return chakram.wait();
        });


        it('should respond default for "unexpected error"', function() {
            var response = request('put', 'http://localhost:5000/api/v1/recipes/officiaametdolaboris', { 
                'time': true
            });

            return chakram.wait();
        });
    
    });
});