import express from 'express'
import mongoose from 'mongoose'
import ProjectModel from '../models/ProjectModel.js'



export const createProject = async(req, res) => {

    const project = req.body
    const newProject = new ProjectModel({...project })

    try {
        await newProject.save()
        res.status(201).json(newProject)
    } catch (error) {
        console.log(error.message)
        res.status(409).json(error.message)
    }
}

export const getProject = async(req, res) => {
    try {
        const project = await ProjectModel.find();
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}