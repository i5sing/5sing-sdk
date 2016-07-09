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
                body: body,
                headers: option.headers
            },
            function (err, response, body) {
                try {
                    body = JSON.parse(body);
                } catch (e) {}

                if (err) {
                    error(err, body, response);
                    return reject(err, body, response);
                }

                success(body, response);
                return resolve(body, response);
            });
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