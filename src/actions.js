import url from "./url"
import { redirect } from "react-router-dom"

export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newBirdnest = {
        name: formData.get("name"),
        category: formData.get("category"),
        description: formData.get("description"),
    }

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBirdnest)
    })

    // redirect to the index page
    return redirect("/")
}

export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedBirdnest = {
        name: formData.get("name"),
        category: formData.get("category"),
        description: formData.get("description"),
    }

    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBirdnest)
    })

    return redirect(`/post/${id}`)
}

export const deleteAction = async({params}) => {
    const id = params.id

    await fetch(url + id, {
        method: "delete"
    })

    return redirect("/")
}