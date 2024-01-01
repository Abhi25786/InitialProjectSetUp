import i18next from "i18next";
import { setItem } from "../../utils/utils";
import { setPrimaryFont } from "../reducer/mailReducer";
import { store } from "../store";
      
const {dispatch} = store

export const primaryFontFamily = (data: object) => {
    setItem('primaryFontFamily', data).then(() => {
        dispatch(setPrimaryFont(data))
    }).catch((error) => {
        console.log(error, 'errorerrorerrorerror');
    })
}
export const changePrimaryTranslation = (data: string) => {
    setItem('primaryTranslation', data).then(() => {
        i18next.changeLanguage(data);
    }).catch((error) => {
        console.log(error, 'errorerrorerrorerror');
    })
}
