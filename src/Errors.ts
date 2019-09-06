'use strict';

export class ArgumentNullError implements Error {
    constructor(argumentName: string) {
        this.name = 'ArgumentNullError';
        this.message = `The argument, '${argumentName}', cannot be null.`;
    }
    
    name: string;
    message: string;
}

export class GeneratorError implements Error {
    constructor(message?: string) {
        this.name = 'GeneratorError';
        this.message = message;
    }
    
    name: string;
    message: string;
}

export class ParserError implements Error {
    constructor(message?: string) {
        this.name = 'ParserError';
        this.message = message;
    }
    
    name: string;
    message: string;
}

export class QuerySyntaxError implements Error {
    constructor(message?: string) {
        this.name = 'QuerySyntaxError';
        this.message = message;
    }
    
    name: string;
    message: string;
}