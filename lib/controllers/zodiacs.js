const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const matchingZodiac = zodiacs.find((zodiac) => zodiac.id === id);

    res.json(matchingZodiac);
  })

  .get('/', (req, res) => {
    const updatedZodiacs = zodiacs.map(zodiac => {
      return { name: zodiac.name, dates: zodiac.dates, symbol: zodiac.symbol };
    });
    res.json(updatedZodiacs);
  });

