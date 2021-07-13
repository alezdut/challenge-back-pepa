import fetch from 'node-fetch';

type TResponse = {
    data?: any;
    status: number;
    statusText?: string;
};

const get = async (url: string): Promise<TResponse> => {
    const options = {
        method: 'GET'
    };
    const response = await fetch(url, options);
    const { status } = response;

    const data = await response.json();
    return { data, status };
};

export default get