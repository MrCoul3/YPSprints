/* eslint no-extraneous-dependencies: 0 */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./dist'));

app.listen(PORT, () => {
  /* eslint no-console: 0 */
  /* eslint max-params: [2, 4] */
  console.log(`Мой текст и порт: ${PORT}!`);
});
