import { StatusCodes } from 'http-status-codes';
interface AWSResponse {
    statusCode: number;
    body: string;
}
export { StatusCodes };
export declare const defaultResponse: (statusCode: StatusCodes) => AWSResponse;
