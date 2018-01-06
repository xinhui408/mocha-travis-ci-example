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
//check out of range Greeting string
it('When time<5 or time>24, it is out of range, should return Now is too late!',done=>{
const str = date(3)
str.should.equal("Now is too late!")
done()
})
})