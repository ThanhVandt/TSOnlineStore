import instance from ".";
import { IProduct, updateForm, addForm } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}

export const add = (body: addForm) => {
    const uri = "/products"
    return instance.post(uri, body)
}

export const deleteId = (id:String) =>{
    return instance.delete("/products/" + id)
}