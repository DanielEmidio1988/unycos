import { useState } from "react";
import axios from "axios";

function GlobalState(){
    const [dataUser, setDataUser] = useState('')
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return{
        dataUser, 
        setDataUser,
        loading, 
        setLoading,
        showModal, 
        setShowModal,
    }
}

export default GlobalState