export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart_state', serializedState);
    } catch (err){
        //ignore
    }
};

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('cart_state');
        if (serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

