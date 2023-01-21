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




export {
    getItems, addItem

}


