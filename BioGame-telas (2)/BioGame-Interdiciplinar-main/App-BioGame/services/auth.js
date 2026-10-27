import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"

import {auth} from '../configuration/firebase'

export async function cadastrar(email, senha){
    return await createUserWithEmailAndPassword(
        auth,
        email,
        senha
    )
}

export async function entrar(email, senha){
    return await signInWithEmailAndPassword(
        auth,
        email,
        senha
    )
}
export async function sair(){
    return await signOut(auth)
}