import express from 'express'
import {createProject,getProject} from "../controllers/project.js"

const router = express.Router()


router.post('/', createProject )
router.get('/', getProject)
export default router