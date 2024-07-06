import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).json({
        message: err.message,
        // Optionally include stack trace in development
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
}
