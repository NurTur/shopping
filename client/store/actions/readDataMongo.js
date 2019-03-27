export const READ = "READ";
export const GETPR = "GETPR";
export const GETDB = (obj) => ({ type: READ, payload: obj });
export const GETProducts = (arr) => ({ type: GETPR, payload: arr });



