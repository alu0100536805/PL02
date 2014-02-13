var assert = chai.assert;

suite('CSV', function() {
     test(' 4ª: 1, 2, 3, 4, 5 es una tabla', function() {
         original.value = "1, 2, 3, 4, 5";
         calculate();
         assert.match(finaltable.innerHTML, /table/);
     });
     	test('2ª: Cadena CSV', function() {
        original.value = "hola, que tal\n estas,me encuentro bastante bien";
        calculate();
        assert.match(finaltable.innerHTML, /table/);
    });
});