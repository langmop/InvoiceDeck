import express from 'express'
import mongoose from 'mongoose'

const ProjectSchema = mongoose.Schema({
    projectName: String,
    KLOC: String,
    a: String,
    b: String,
    c: String,
})

const ProjectModel = mongoose.model('ProjectModel', ProjectSchema)
export default ProjectModel