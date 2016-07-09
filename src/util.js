/**
 * Created by zhaofeng on 7/9/16.
 */
export function mixin(target, mixin) {
    for (let key in mixin) {
        if (target[key] !== mixin[key]) {
            target[key] = mixin[key]
        }
    }
}