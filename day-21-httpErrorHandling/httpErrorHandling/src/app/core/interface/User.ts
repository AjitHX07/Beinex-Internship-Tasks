export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        city: string,
        zipcode: number
    },
    phone: number,
    website: string

}