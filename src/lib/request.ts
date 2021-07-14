import fetch from 'node-fetch';

type TData = {
    name?: String;
    order?: Number;
    base_experience?: Number
};

const get = async (url: string): Promise<TData> => {
    const options = {
        method: 'GET'
    };
    const response = await fetch(url, options);

    const data = await response.json();
    return data;
};

export default get