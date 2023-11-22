export type TIntro = {
    category: TCategoryModel
    data: TModel[]
}

export type TModel = {
    name: string
    text: string
    image_url: string
    model: any
    scale: number
}

export type TCategoryModel = {
    name: string
    title: string
}