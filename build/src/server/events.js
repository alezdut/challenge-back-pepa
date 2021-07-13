"use strict";
const onServerError = () => console.log({ message: `Server error` });
const modules = {
    onServerError
};
module.exports = modules;
