export const READDB = "READDB";
export const LOADDB = "LOADDB";
export const GetDB = (obj) => ({ type: READDB, payload: obj });
export const TestLoadDB = (bool) => ({ type: LOADDB, payload: bool });

