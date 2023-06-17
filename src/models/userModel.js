import userSchema from "./userSchema.js"


export const getUserByEmail = (email) => {
    return userSchema.findOne({email})
}