export type newsLayout = {
    title: string,
    content: string,
    date: Date,
    owner: string,
    id: string
}

export enum newsReducerEnum{
    REMOVE,
    ADD,
    EDIT,
    SET
}

interface setNewsINT {
    type: newsReducerEnum.SET;
    payload: newsLayout[]; 
}

interface deleteMessageINT {
    type: newsReducerEnum.REMOVE;
    payload: string;
}
interface addMessageINT {
    type: newsReducerEnum.ADD;
    payload: newsLayout;
}
interface editMessageINT {
    type: newsReducerEnum.EDIT;
    payload: {
        message: newsLayout,
        id: string
    };
}

export const setNewsINT = (news: newsLayout[]) => {
    return{
        type: newsReducerEnum.SET,
        payload: news
    }
}


export const deleteMessageINT = (id: string) => {
    return {
        type: newsReducerEnum.REMOVE,
        payload: id
    }
}
export const addMessageINT = (message: newsLayout) => {
    return {
        type: newsReducerEnum.ADD,
        payload: message
    }
}
export const editMessageINT= (message: newsLayout, id: string) => {
    return {
        type: newsReducerEnum.EDIT,
        payload: {
            message,
            id
        }
    }
}

export type NewsAction = deleteMessageINT | addMessageINT | editMessageINT | setNewsINT;