import {
    StatusCodes,
    getReasonPhrase,
} from 'http-status-codes';

interface AWSResponse {
    statusCode: number,
    body: string
}

export { StatusCodes }

export const defaultResponse = (statusCode: StatusCodes): AWSResponse => {
    const phrase = getReasonPhrase(statusCode)
    return {
        statusCode: statusCode,
        body: JSON.stringify({
            error: phrase
        })
    }
}