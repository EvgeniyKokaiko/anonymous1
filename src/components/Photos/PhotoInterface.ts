export interface Photo {
    alt_description: string
    blur_hash: string
    categories: string[]
    color: string
    created_at: string
    current_user_collections: string[]
    description: string
    height: number
    id: string
    liked_by_user: boolean
    likes: number
    links: {self: string, html: string, download: string, download_location: string}
    promoted_at: string
    sponsorship: string
    tags: {type:string ,title: string}[]
updated_at: string
urls: {raw: string, full: string, regular: string, small: string, thumb: string}
user: {id: string, updated_at: string, username: string, name: string, first_name: string}
width: 4160
}