import SingleCat from "./SingleCat";

const cats = [
  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_square.jpg"
  },
  {
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/23/2015/08/GettyImages-564698287-1a46f0f.jpg"
  },
  {
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg"
  },
  {
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/800px-African_leopard_male_%28cropped%29.jpg"
  },
  {
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
  },
  {
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/800px-Irbis4.JPG"
  },
  {
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg"
  }
];

function BigCats() {
  return (
    <div className="big-cats">
      {cats.map((cat, index) => (
        <SingleCat key={index} cat={cat} />
      ))}
    </div>
  );
}

export default BigCats;
