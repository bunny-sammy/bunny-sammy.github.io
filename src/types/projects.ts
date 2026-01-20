export type Link = {
    type: "github" | "view",
    url: string
}

export type Project = {
    id: string,
    tags: string[],
    links: Link[]
}