const should = require('should')
const date = require('../lib/date.js')
describe('#date',()=>{
//When 5<= time <12, should return Good Morning
it('When 5<= time <12, should return Good Morning',done=>{
const str = date(5)
str.should.equal("Good Morning")
done()
})
//When 12<= time <18, should return Good Afternoon
it('When 12<= time <18, should return Good Afternoon',done=>{
const str = date(16)
str.should.equal("Good Afternoon")
done()
})
//When 18<= time <22, should return Good Evening
it('When 18<= time <22, should return Good Evening',done=>{
const str = date(18)
str.should.equal("Good Evening")
done()
})
//When 22<= time <24, should return Good Night
it('When 22<= time <24, should return Good Night',done=>{
const str = date(23)
str.should.equal("Good Night")
done()
})
//When 0<= time <5, should return Now is too late!
it('When 0<= time <5, should return Now is too late!',done=>{
const str = date(0)
str.should.equal("It is too late!")
done()
})
it('When 0<= time <5, should return Now is too late!',done=>{
const str = date(3)
str.should.equal("It is too late!")
done()
})
//check out of range Greeting string
it('When time<0 or time>=24, it is out of range, should return Invalid time value!',done=>{
const str = date(-1)
str.should.equal("Invalid time value!")
done()
})
it('When time<0 or time>=24, it is out of range, should return Invalid time value!',done=>{
const str = date(24)
str.should.equal("Invalid time value!")
done()
})
})