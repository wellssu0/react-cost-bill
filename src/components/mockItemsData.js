import Mock from 'mockjs'

export default Mock.mock('./postItemsData','post',{
  success:true,
  "items|100":[
    {
      "id|+1": 0 ,
      "title": "@cword(2,15)",
      "price|0-9999": 1,
      "date": "@date",
      "cid" : "@integer(0,13)"
    }
  ]

})