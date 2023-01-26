import { orderingBy , filteringD , directorStat, filteringP ,searchInput } from '../src/data.js';


describe('orderingBy', () => {
  it('should be a function', () => {
    expect(typeof orderingBy).toBe('function');
  });

  it('should return first age: 4, second age: 3 ', () => {
    expect(orderingBy([{ age: 3 } , { age: 4 } ] , 'age')).toEqual( [ { age: 4} , { age: 3 } ]);
  });

});

describe('filteringD' , () => {
  it('should be a function', () => {
    expect(typeof filteringD).toBe('function');
  });

  it('should return director named jhon', () =>{
    expect(filteringD([{director : 'joseph' , age : 5} , {director: 'jhon' , age: '2'} , {director: 'joseph' , age: '35'} ] , 'director' , 'jhon')).toEqual([ {director:'jhon' , age: '2'}]);
  });

  it('should return [] when theres no match ' , () =>{
    expect(filteringD([{type: 'air' } , {type: 'earth'}] , 'type' , 'water')).toEqual([]);
  });
});

describe('filteringP' , () => {
  it('should be a function', () => {
    expect(typeof filteringP).toBe('function');
  });

  it('should return girls named maria', () =>{
    expect(filteringP([{name : 'maria' , age : '25'} , {name: 'naty' , age: '12'} , {name: 'maria' , age: '6'} ] , 'name' , 'maria')).toEqual([ {name : 'maria' , age : '25'} , {name: 'maria' , age: '6'} ]);
  });

  it('should return [] when theres no match ' , () =>{
    expect(filteringP([{material: 'plastic' } , {material: 'resine'}] , 'material' , 'gum')).toEqual([]);
  });
});

describe('searchInput', () => {
  it('should be a function', () => {
    expect(typeof searchInput).toBe('function');
  });

  it('should return totoro and tamarindo for "t"', () => {
    expect(searchInput( 't' , [{title: 'totoro' , rating: '100'} , {title: 'monday' , rating: '95'} , {title: 'tamarindo' , rating: '50'}]  )).toEqual([{title: 'totoro' , rating: '100'} , {title: 'tamarindo' , rating: '50'}]);
  });

  it('should return [] for "blabla" ' , () => {
    expect(searchInput( 'blabla' , [{title: 'elephants'} , {title: 'more'} , {title: 'ballet'}] )).toEqual([]);
  });
});

describe('directorStat', () => {
  it('should be a function', () => {
    expect(typeof directorStat).toBe('function');
  });

  it('should return 65 for 13 and 20 ', () => {
    expect(directorStat(13 , 20)).toBe(65);
  });

  it('should return NaN for "ghibli" and 20' , () => {
    expect(directorStat("ghibli" , 20)).toBe(NaN);
  });
});


