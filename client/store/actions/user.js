export const CREATE = "CREATE";
export const ADDPRODUCT = "ADDPRODUCT";
export const CreateUser = (obj) => ({ type: CREATE, payload: obj });
export const AddPRODUCT = (obj) => ({ type: ADDPRODUCT, payload: obj });

