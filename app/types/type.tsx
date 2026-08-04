export type PlaneTableTypes = {
    price?:number | string,
    tag?: string, 
    websiteNum:string, 
    storage: string, 
    database:string, 
    bandwidth:boolean | string, 
    ssd:boolean | string, 
    vcpus:boolean | string, 
    worldpress:boolean | string, 
    serverSpeed:boolean | string, 
    header?:boolean
};

export type PhoneAd2Left = {
    id: number,
    title1: string,
    titleBig: string,
    titleSmall: string,
    titleXs: string,
    src: string
}


export type ScrollAds = {
    id: number,
    firstTitle: string,
    bigTitle: string,
    medTitle: string,
    smallTitle: string,
    src: string
}