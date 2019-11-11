export default store => next => action => {
    console.log('--', 'dispatching action:', action);
    next(action);
}
