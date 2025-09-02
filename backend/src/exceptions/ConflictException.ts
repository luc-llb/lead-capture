import { BaseException } from './BaseException';

export class ConflictException extends BaseException {
    constructor(message: string = 'Conflict') {
        super(message, 409);
    }
}
