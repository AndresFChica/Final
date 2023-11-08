export enum classType{
    Classic = 'classic',
    Toy = 'toy',
    Springlock = 'springlock',
    Nightmare = 'nightmare',
    Funtime = 'funtime'

}

export interface animatronicEntry{
    id: number,
    name: string,
    ClassType: classType,
    creation_date: number,
    affiliation: string,
    possessed_by: string,
    assassinations: number
}

export type NonSensitiveInfoAnimatronicEntry = Omit<animatronicEntry, 'assassinations'| "possessed_by">
export type newAnimatronicEntry = Omit<animatronicEntry, 'id'>