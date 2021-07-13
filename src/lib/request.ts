import fetch from 'node-fetch';

type TResponse = {
    data?: any;
};

const get = async (url: string): Promise<TResponse> => {
    const options = {
        method: 'GET'
    };
    const response = await fetch(url, options);

    const data = await response.json();
    return { data };
};

export default get