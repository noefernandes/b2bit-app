import { AxiosError, AxiosHeaders } from 'axios';
import { handleNotAuthorizedRequest } from '../connection/loginAxios';
import { describe, expect, it } from 'vitest'

// Test suite
describe('handleNotAuthorizedRequest', () => {

    it('should reject if the status is not 401', async () => {
        var request = { path: "refresh/" };
        const headers = new AxiosHeaders();
        const config = {
            url: "http://localhost:3000",
            headers
        };
        var error = new AxiosError("Erro", "ESOMETHING", config, request, {
            status: 200,
            data: { foo: "bar" },
            statusText: "ok",
            config,
            headers
        });

        const response = handleNotAuthorizedRequest(error);
        const expectedError = new Error("Erro");

        expect(response).rejects.toThrow(expectedError);
    });
});
