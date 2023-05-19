import React from "react";

async function getBreeds() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    return res.json();
}

async function BreedList() {
    const breedList = await getBreeds();
    const breeds = Object.keys(breedList.message);
    return (
        <div>
            <select>
                {breeds.map((breed: any) => (
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BreedList;
