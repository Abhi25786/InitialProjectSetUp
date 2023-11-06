export interface userDataObject {
authToken:string
}
export interface authInerface {
    userData:userDataObject
}
export interface fontFamilyobject {
    id:number
    bold:string
    medium:string
    regular:string
}
export interface mainInterface {
    primaryFontFamily:fontFamilyobject,
    primaryLanguage:string
}
export interface allReducer {
    auth:authInerface
    main:mainInterface
}
