export type contactLayout = {
  f_name: string,
  l_name: string,
  id: string,
  description: string,
  phone: string,
  email: string,
  photoURL: string
}

export enum contactReducerEnum{
  REMOVE,
  ADD,
  EDIT,
  SET
}

interface setContactINT {
  type: contactReducerEnum.SET;
  payload: contactLayout[]; 
}

interface deleteContactINT {
  type: contactReducerEnum.REMOVE;
  payload: string;
}
interface addContactINT {
  type: contactReducerEnum.ADD;
  payload: contactLayout;
}
interface editContactINT {
  type: contactReducerEnum.EDIT;
  payload: {
      contact: contactLayout,
      id: string
  };
}

export const setContactINT = (contact: contactLayout[]) => {
  return{
      type: contactReducerEnum.SET,
      payload: contact
  }
}


export const deleteContactINT = (id: string) => {
  return {
      type: contactReducerEnum.REMOVE,
      payload: id
  }
}
export const addContactINT = (contact: contactLayout) => {
  return {
      type: contactReducerEnum.ADD,
      payload: contact
  }
}
export const editContactINT= (contact: contactLayout, id: string) => {
  return {
      type: contactReducerEnum.EDIT,
      payload: {
        contact,
          id
      }
  }
}

export type ContactAction = deleteContactINT | addContactINT | editContactINT | setContactINT;