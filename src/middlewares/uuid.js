export default store => next => action => {
    if (!action.hasOwnProperty('getUuid') || action.getUuid !== true) {
        return next(action);
    }
    next({...action,
        uuid: uuidV4()
    });
}
const uuidV4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
