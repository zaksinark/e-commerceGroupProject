export const setSession = (username) => ({
    type: 'SET_SESSION',
    payload: username,
});

export const clearSession = () => ({
    type: 'CLEAR_SESSION',
});

export const addProductToCart = (product) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: product,
});

export const removeProductFromCart = (productId) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: productId,
});

export const addProductToSavedItems = (product) => ({
    type: 'ADD_PRODUCT_TO_SAVED_ITEMS',
    payload: product,
});

export const removeProductFromSavedItems = (productId) => ({
    type: 'REMOVE_PRODUCT_FROM_SAVED_ITEMS',
    payload: productId,
});

export const moveProductToSavedItemsFromCart = (productId) => ({
    type: 'MOVE_PRODUCT_TO_SAVED_ITEMS_FROM_CART',
    payload: productId,
});

export const moveProductToCartFromSavedItems = (productId) => ({
    type: 'MOVE_PRODUCT_TO_CART_FROM_SAVED_ITEMS',
    payload: productId,
});