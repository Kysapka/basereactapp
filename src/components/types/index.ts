export type postType = {
    id: number,
    title: string,
    body: string
}

export type filterType = {
    sort: string
    query: string
}

export type SortType = 'title' | 'body'
