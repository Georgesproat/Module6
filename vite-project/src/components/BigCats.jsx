import SingleCat from "./SingleCat";
import { useState } from "react";
import AddCatForm from "./AddCatForm";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_square.jpg"
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/23/2015/08/GettyImages-564698287-1a46f0f.jpg"
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg"
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/800px-African_leopard_male_%28cropped%29.jpg"
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/800px-Irbis4.JPG"
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg"
  }
];

function BigCats() {
  const [catList, setCatList] = useState(cats);

  const handleSortAlphabetically = () => {
    const sortedCats = [...catList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCatList(sortedCats);
  };

  const handleReverseList = () => {
    const reversedCats = [...catList].reverse();
    setCatList(reversedCats);
  };

  const handleFilterPanthera = () => {
    const pantheraCats = cats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCatList(pantheraCats);
  };

  const handleResetList = () => {
    setCatList(cats);
  };

   const handleAddCat = (newCat) => {
     newCat.id = Date.now(); 
     setCatList([...catList, newCat]);
   };

   const handleDeleteCat = (catId) => {
     const updatedCats = catList.filter((cat) => cat.id !== catId);
     setCatList(updatedCats);
   };

 return (
   <div className="big-cats">
     <div className="controls">
       <button onClick={handleSortAlphabetically}>Sort Alphabetically</button>
       <button onClick={handleReverseList}>Reverse List</button>
       <button onClick={handleFilterPanthera}>Filter Panthera Family</button>
       <button onClick={handleResetList}>Reset List</button>
       <AddCatForm onAddCat={handleAddCat} />
     </div>
     <div>
       {catList.map((cat) => (
         <SingleCat key={cat.id} cat={cat} onDelete={handleDeleteCat} />
       ))}
     </div>
   </div>
 );
}


export default BigCats;
