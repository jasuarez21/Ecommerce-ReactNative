const {
  getAll
} = require('./motosController')();
const Moto = require('../models/motosModel');

jest.mock('../models/motosModel');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    Moto.find.mockResolvedValueOnce([{ name: 'Pepe' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });
});
