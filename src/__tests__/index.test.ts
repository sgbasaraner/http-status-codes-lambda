import { defaultResponse, StatusCodes } from '../index';

const expectedResponse = {
    statusCode: 500,
    body: JSON.stringify({
        error: 'Internal Server Error'
    })
}

test('500 response', () => {
    const response = defaultResponse(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(response.statusCode).toBe(expectedResponse.statusCode)
    expect(response.body).toBe(expectedResponse.body)
})