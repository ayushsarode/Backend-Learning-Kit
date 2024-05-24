1. Connect mongo with the url<br>
2. Creating a Schema: <br>
In MongoDB, a schema refers to the way data is organized within a database. It outlines the structure of documents stored in collections, defining the fields and their data types.<br><br>
Example:
`const student = mongoose.Schema({  
    name: String, 
    RollNum: Number,
    FeesPaid: Boolean,
})`

3. Creating a model: <br>
A data model is typically designed around collections, documents, and sometimes embedded documents or references between documents.<br>
Example: <br>
`const Student = mongoose.model("Student", student)` <br> <br>
* `mongoose.model()` is a method provided by Mongoose to create or retrieve a model. <br>
* `"Student"` is the name of the model. This is how you will refer to this model in your code. <br>
* `student` is typically a schema object or a JSON-like object representing the schema of the documents that will be stored in the "Student" collection. <br>
