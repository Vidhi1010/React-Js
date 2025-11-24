import React from "react";

const Input = () => {
  const [addIngredient, setAddIngredient] = React.useState([]);
  //const [newIngredient, setNewIngredient] = React.useState("");

  function onMouseOver(e) {
    e.currentTarget.style.backgroundColor = "#333";
  }

  function onMouseOut(e) {
    e.currentTarget.style.backgroundColor = "black";
  }

  function handleSubmit(e) {
    /*   e.preventDefault();

    if (newIngredient.trim() === "") return; // avoid empty entries

    // update the array safely using the callback form
    setAddIngredient((prevThings) => [...prevThings, newIngredient]);

    // clear the input after adding
    setNewIngredient(""); */

   e.preventDefault();

    // Read value from form
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient").trim();

    if (newIngredient === "") return; // avoid empty inputs

    // Update state (correct variable and name)
    setAddIngredient((prevIngredients) => [...prevIngredients, newIngredient]);

    // Clear the input field manually
    e.currentTarget.reset();
  }

  const ingredientsListItems = addIngredient.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 mt-6 pt-10 max-w-3xl mx-auto bg-#f3f3f3"
      >
        <input
          type="text"
          placeholder="e.g. potato"
          name="ingredient"
          /* value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)} */
          className="flex-[2] bg-white text-gray-900 px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition-all"
        />
        <button
          type="submit"
          className="flex-[1] bg-black text-white px-5 py-4 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition-all"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          + Add ingredients
        </button>
      </form>

      <ul>{ingredientsListItems}</ul>
    </main>
  );
};

export default Input;
