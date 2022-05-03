const mongodb = require("mongodb").MongoClient;
let mongodbURL = "mongodb://localhost:27017";

// mongodb
//   .connect(mongodbURL)
//   .then(db => {
//     console.log("Database connected");
//     let newMarn = db.db("mernStack");
//     // create collection
//     newMarn.createCollection("mernStackCollection");
//   })
//   .catch(err => {
//     console.log(err);
//   });

let mongodbConnection = async () => {
  try {
    let connections = await mongodb.connect(mongodbURL);
    //   createDb name
    let dbname = connections.db("MERN");
    //   insert data into collection
    let students_obj = {
      student_name: "gokul",
      student_id: "type1",
      student_class: "1st std",
      student_marks: "70%",
    };
    //   create collection

    let data = await dbname.collection("students").insertOne(students_obj);
    console.log("successfully db connected");
    console.log("successfully data inserted", data);
  } catch (error) {
    console.log(error);
  }
};
mongodbConnection();
