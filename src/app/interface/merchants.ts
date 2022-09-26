export interface Body {
    type: string
    query: string
}

export interface Merchants {
    merchants: {
        content: any[]
        numberOfElements: number
        totalElements: number
        totalPages: number
    }
}