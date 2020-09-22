const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.app.json');
module.exports  =   {  
    preset:   'jest-preset-angular', // load the adapater
    roots:  ['<rootDir>/src/'], // start searching for filoes from root
    testMatch:  ['**/+(*.)+(spec).+(ts|js)'], // test file extensions
    setupFilesAfterEnv:  ['<rootDir>/src/test.ts'], // setup env file
    collectCoverage:  true, // code coverage
    coverageReporters:  ['html'], // generate the report in HTML
    coverageDirectory:   'coverage/my-app', // folder for coverage
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' })
};