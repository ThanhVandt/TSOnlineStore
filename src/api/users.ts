import instance from ".";
import { IProduct, updateForm } from "../models";

export const getAllUsers = () => {
    const uri = "/users"
    return instance.get(uri)
}
export const getByIdUsers = (id: String) => {
    const uri = "/users/" + id
    return instance.get(uri)
}
export const deleteIdUsers = (id:String) =>{
    return instance.delete("/users" + id)
}