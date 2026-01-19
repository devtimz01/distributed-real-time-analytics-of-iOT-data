
export interface Auth{
    id: string;
    username: string;
    email: string;
    isEmailVerified:boolean
    password: string;
    gender: 'male'|'female',
    age: number,
    createdAT: Date;
    updatedAt: Date
}