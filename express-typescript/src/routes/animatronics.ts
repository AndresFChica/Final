import express  from "express";
import * as animatronicServices from "../services/animatronicServices"
import toNewAnimatronicEntry from "../utils";

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(animatronicServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const animatronic = animatronicServices.findById(+req.params.id)
    
    return (animatronic != null)
        ?res.send(animatronic)
        :res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
        const newAnimatronicEntry = toNewAnimatronicEntry(req.body)

        const addedAnimatronicEntry = animatronicServices.addAnimatronic(newAnimatronicEntry)

    res.json(addedAnimatronicEntry)
    } catch (Error: any) {
        res.status(400).send(Error.message)
    }
    
})

export default router