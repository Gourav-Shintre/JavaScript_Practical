const sum=require('./sum')
test('adds 2 + 1 equal to 3',()=>{
    expect(sum(1,2)).toBe(3)
})