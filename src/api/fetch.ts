export enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

export type HttpOptions = {
    headers?: Record<string, string>,
    method?: keyof typeof METHODS,
    data?: PlainObject,
    timeout?: number,
    withCredentials?: boolean,
    retries?: number
}

export type PlainObject<T = unknown> = {
    // eslint-disable-next-line no-unused-vars
    [key in string]: T;
};

function queryStringify(data: PlainObject) {
    let result = '?';
    Object.keys(data).forEach((key, i, arr) => {
        result += `${key}=${data[key]}`;
        if (arr.length > 1 && i !== arr.length - 1) {
            result += `&`;
        }
    })
    return result;
}

type OptionsWithoutMethod = Omit<HttpOptions, 'method'>;

class HTTPTransport {
    get(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(options.data ? `${url}${queryStringify(options.data)}` : url, {
            ...options,
            method: METHODS.GET
        }, options.timeout);
    }

    put(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    request(url: string, options: HttpOptions, timeout = 1000) {
        const {method, data} = options;
        return new Promise((resolve, reject) => {
            if (!method) {
                reject('Нет метода')
            }
            const xhr = new XMLHttpRequest();
            xhr.open(method ? method : METHODS.GET, url);
            xhr.onload = function () {
                resolve(xhr);
            }
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        })
    };
}

function fetchWithRetry(url: string, options: HttpOptions): Promise<XMLHttpRequest> {
    const {retries = 1} = options;

    function errorHandler() {
        const retriesCount = retries - 1;
        if (retriesCount) {
            console.log(retriesCount)
            return fetchWithRetry(url, {...options, retries: retriesCount})
        } else {
            throw new Error('превышено число попыток запроса')
        }
    }

    return (new HTTPTransport().get(url, options).catch(errorHandler) as Promise<XMLHttpRequest>);
}


const url = 'https://chats';
const options = {
    retries: 2,
    data: {
        name: 'get_request',
        surname: 'something',
        three: {
            a: '1'
        }
    }
}
fetchWithRetry(url, options);


