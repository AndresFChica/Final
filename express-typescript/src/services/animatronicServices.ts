import { animatronicEntry, newAnimatronicEntry, NonSensitiveInfoAnimatronicEntry} from '../type'
import animatronicData from './animatronic.json'

const animatronics: Array<animatronicEntry> = animatronicData as unknown as Array<animatronicEntry> //El unknown no se que hace

export const getEntries = (): animatronicEntry[] => animatronics

export const findById = (id:number): NonSensitiveInfoAnimatronicEntry | undefined =>{
    const entry = animatronics.find(d => d.id == id)
    if(entry != null){
        const {assassinations, possessed_by, ...restOfAnimatronic} = entry
        return restOfAnimatronic
    }
    return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoAnimatronicEntry[] => {
    return animatronics.map(({id, name, ClassType, creation_date, affiliation}) => {
        return{
            id,
            name,
            ClassType,
            creation_date,
            affiliation
        }
    })
}

export const addAnimatronic = (newAnimatronicEntry: newAnimatronicEntry): animatronicEntry => {
    const newAnimatronic = {
        id: Math.max( ...animatronics.map(d => d.id)) +  1,
        ...newAnimatronicEntry
    }

    animatronics.push(newAnimatronic)
    return newAnimatronic
}
