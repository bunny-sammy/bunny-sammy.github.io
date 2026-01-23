export type Link = {
    type: "github" | "view",
    url: string
}

export type Project = {
    id: string,
    year: number,
    tags: string[],
    images?: string[],
    links: Link[],
}