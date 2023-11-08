import { classType, newAnimatronicEntry } from "./type"

const parseName = (nameFromRequest: any): string =>{
    if(!isString (nameFromRequest)){
        throw new Error("Incorrect or missing name")
    }
    return nameFromRequest
}

const parseClassType = (classTypeFromRequest: any): classType =>{
    if(!isString (classTypeFromRequest) || !isClassType(classTypeFromRequest)){
        throw new Error('Incorrect or missing Class Type')
    }
    return classTypeFromRequest
}

const parseCreationDate = (creationDateFromRequest: any): number =>{
    if(!isNumber(creationDateFromRequest) || creationDateFromRequest < 1970 || creationDateFromRequest > 2000){
        throw new Error('Incorrect or missing creation date')
    }
    return creationDateFromRequest
}

const parseAssassinations = (assassinationsFromRequest: any): number =>{
    if(!isNumber(assassinationsFromRequest) || assassinationsFromRequest < 0 || assassinationsFromRequest > 15){
        throw new Error('Incorrect or missing Assassinations')
    }
    return assassinationsFromRequest
}

const isClassType = (param: any): boolean =>{
    return Object.values(classType).includes(param)
}

const isString = (string: string): boolean =>{
    return typeof string == 'string'
}

const isNumber = (number: number): boolean =>{
    return typeof number == "number"
}

const toNewAnimatronicEntry = (object: any): newAnimatronicEntry => {
    const newEntry: newAnimatronicEntry = {
        name: parseName(object.name),
        ClassType: parseClassType(object.ClassType),
        creation_date: parseCreationDate(object.creation_date),
        affiliation: parseName(object.affiliation),
        possessed_by: parseName(object.possessed_by),
        assassinations: parseAssassinations(object.assassinations)
    }
    return newEntry
}

export default toNewAnimatronicEntry