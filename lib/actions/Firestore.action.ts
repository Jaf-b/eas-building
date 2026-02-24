"use server"


//Documents and Files management

export const getFilesbyUserId = async (userId:string) => {}
export const addFiles = async (files:string[]) => {}
export const deleteFiles = async (files:string[]) => {}

// folder management
export const getFolderbyUserId = async (userId:string) => {}
export const createFolder = async (folder:string) => {}
export const deleteFolder = async (folder:string) => {}

// add reader permissions
export const sendFile = async (file:string) => {} // or Add Reader permissions


// Project manager
export const getProjects = async (projectId:string) => {}
export const addProject = async (project:string) => {}
export const updateProject = async (project:string) => {}
export const deleteProject = async (project:string) => {}

// Project Filter // implement later .................


// Task manager
export const getTaksbyProjectId = async (projectId:string) => {}
export const createTask = async (task:string) => {}
export const updateTask = async (task:string) => {}
export const deleteTask = async (task:string) => {}

//Finance management > employee management > Budget management > Bills and Payments management > reports generators





