import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/items"

const getItems = async (cb) => {
    try { 
        let items = await axios({
            method : 'GET',
            url: URL
        })
        cb(items.data)
    } catch (e) {
        console.log(e);
    }
}

const addItem = async (item) => {
    try {
        let result = await axios({
            method : 'POST',
            url: URL,
            data: item
        })

        console.log(result.data)
    } catch (e) {
        console.log(e);
    }
}

const deleteItem = async (id) => {
    try {
        let result = await axios({
            method : 'DELETE',
            url: URL + '/' + id
        })

        console.log(result)
    } catch (e) {
        console.log(e)
    }
}


const editItem = async (id, item) => {
    try {
        let result = await axios({
            method : 'PUT',
            url: URL + '/' + id,
            data: item
        })
        
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}


const dataItem = async (id, cb) => {
    try {
        let result = await axios({
            method : 'GET',
            url: URL + '/data/' + id
        })

        cb(result.data) //callback
    } catch (e) {
        console.log(e)
    }
}


export {
    getItems, addItem, deleteItem, editItem, dataItem

}


