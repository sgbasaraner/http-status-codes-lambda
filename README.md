# http-status-codes-lambda

A thin wrapper over [http-status-codes](https://github.com/prettymuchbryce/http-status-codes) library. It's useful for returning default errors.

```javascript
import { defaultResponse, StatusCodes } from 'http-status-codes-lambda';

const expectedResponse = {
    statusCode: 500,
    body: JSON.stringify({
        error: 'Internal Server Error'
    })
}

console.log(defaultResponse(StatusCodes.INTERNAL_SERVER_ERROR))
// { statusCode: 500, body: '{"error":"Internal Server Error"}' }
```