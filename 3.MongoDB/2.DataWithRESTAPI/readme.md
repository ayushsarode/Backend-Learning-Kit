# Important Notes 

### 1. We have seperated MongoDb connection and student model with schema in each folder

### 2. To connect all together, add path to the script.js 
` const StudentModel = require('./models/students')` - this is schema and model for students.  <br>
`require("./DB/connection")` - this is connected mongodb

**Note: In student.js export the model module, it should be the name of model**

### 3. Adding scripts to `package.json`: <br>
   ```  
   "scripts": { 
    "start": "node src/script.js",
    "dev": "nodemon src/script.js"},
   ```

#### 4. Using `process.env.PORT || 3000` allows your application to dynamically determine the port based on the environment, making it flexible for deployment across different platforms. Hardcoding the port as 3000 limits this flexibility and may not be compatible with certain hosting environments or deployment practices.


### 5. MongoDB Method: 
Using mongodb method for getting id `findbyid()`

