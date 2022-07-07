import './src/config/setup.js'
import app from './src/app.js';
import './src/config/database.js'

const port = +process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});