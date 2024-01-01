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
    primaryFontFamily:fontFamilyobject
}
export interface allReducer {
    auth:authInerface
    main:mainInterface
}
