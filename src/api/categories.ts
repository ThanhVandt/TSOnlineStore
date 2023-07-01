import instance from ".";
import { IProduct, updateForm, addForm } from "../models";

export const getAllCategories = () => {
    const uri = "/categories"
    return instance.get(uri)
}

export const getById = (id: string) => {
    const uri = "/categories/" + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = "/categories/" + id
    return instance.put(uri, body)
}

export const add = (body: addForm) => {
    const uri = "/categories"
    return instance.post(uri, body)
}

export const deleteId = (id:String) =>{
    return instance.delete("/categories/" + id)
}