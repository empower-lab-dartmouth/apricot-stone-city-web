export type ImageCardData = {
    type: 'image'
    src: string
}

export type TextCardData = {
    type: 'text'
    text: string
}

export type CardData = ImageCardData | TextCardData;
