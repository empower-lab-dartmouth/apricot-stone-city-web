export type AppendToPage = {
    type: 'click-option' | 'free-response'
    option: string
}

export type Action = AppendToPage
