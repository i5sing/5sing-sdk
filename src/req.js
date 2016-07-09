/**
 * Created by zhaofeng on 7/9/16.
 */
import request from 'request';

function send(method = 'GET', url, body, option = {}, success, error) {
    return new Promise((resolve, reject) => {
        request({
                method: method,
                uri: url,
                qs: option.qs,
                json: option.json || true,
                form: option.json || body,
                body: option.json && body,
                headers: option.headers
            },
            function (err, response, body) {
                if (err) {
                    error && error(err, body, response);
                    return reject(err);
                }

                success && success(body, response);
                return resolve(body);
            });
    }).catch(e => {
        console.log(e);
    });
}

export function get(url, option, success, error) {
    return send('GET', url, null, option, success, error);
}

export function post(url, body, option, success, error) {
    return send('POST', url, body, option, success, error);
}

export function del(url, option, success, error) {
    return send('delete', url, null, option, success, error);
}

export function put(url, body, option, success, error) {
    return send('delete', url, body, option, success, error);
}