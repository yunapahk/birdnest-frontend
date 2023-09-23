import url from "./url";

export const createAction = async ({ request }) => {
  const formData = request.formData; 
  
  const newBirdnest = {
    name: formData.get("name"),
    category: formData.get("category"),
    description: formData.get("description"),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBirdnest),
    });

    if (response.ok) {
      return '/';
    } else {
      console.error("Failed to create entry");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while creating the entry:", error);
    return null;
  }
};

export const updateAction = async({request, params}) => {
  const id = params.id;
  const formData = await request.formData();
  const updatedBirdnest = {
    name: formData.get("name"),
    category: formData.get("category"),
    description: formData.get("description"),
  };

  try {
    await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBirdnest)
    });
    return `/post/${id}`;
  } catch (error) {
    console.error("Failed to update:", error);
    return null;
  }
}

export const deleteAction = async({params}) => {
  const id = params.id;
  
  try {
    await fetch(url + id, {
      method: "DELETE"
    });
    return '/';
  } catch (error) {
    console.error("Failed to delete:", error);
    return null;
  }
}
