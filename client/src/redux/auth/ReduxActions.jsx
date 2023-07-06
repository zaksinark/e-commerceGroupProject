export const setSession = (username) => ({
    type: 'SET_SESSION',
    payload: username,
});

export const clearSession = () => ({
    type: 'CLEAR_SESSION',
});