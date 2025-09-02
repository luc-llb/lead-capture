import { Request, Response, NextFunction } from 'express';
import { BaseException } from '../exceptions';

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (error instanceof BaseException) {
        res.status(error.statusCode).json({
            status: 'error',
            message: error.message,
            statusCode: error.statusCode,
            timestamp: new Date().toISOString(),
            path: req.path
        });
        return;
    }

    // External API errors (e.g., Axios errors)
    if (error.name === 'AxiosError' && (error as any).response) {
        const axiosError = error as any;
        const status = axiosError.response.status;
        const data = axiosError.response.data;

        let message = 'External API error';
        
        if (data && data.message) {
            message = data.message;
        }

        res.status(status).json({
            status: 'error',
            message,
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: req.path,
            details: data
        });
        return;
    }

    // Internal Server Error
    console.error('Unhandled error:', error);
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: req.path
    });
};
