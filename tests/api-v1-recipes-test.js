'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /api/v1/recipes', function() {
    describe('tests for get', function() {
        it('should respond 200 for "Recipe List"', function() {
            var response = request('get', 'http://localhost:5000/api/v1/recipes', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond default for "unexpected error"', function() {
            var response = request('get', 'http://localhost:5000/api/v1/recipes', { 
                'time': true
            });

            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 201 for "recipe created"', function() {
            var response = request('post', 'http://localhost:5000/api/v1/recipes', { 
                'time': true
            });

            expect(response).to.have.status(201);
            return chakram.wait();
        });


        it('should respond default for "unexpected error"', function() {
            var response = request('post', 'http://localhost:5000/api/v1/recipes', { 
                'time': true
            });

            return chakram.wait();
        });
    
    });
});