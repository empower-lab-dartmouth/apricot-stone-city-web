export type ImageCardData = {
    id: string
    type: 'image'
    src: string
}

export type TextCardData = {
    id: string
    type: 'text'
    text: string
}

export type CardData = ImageCardData | TextCardData;
