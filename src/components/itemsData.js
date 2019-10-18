import Mock from 'mockjs'

export default Mock.mock('./postItemsData','post',{
  success:true,
  "items|5-10":[
    {
      "id+1": 1 ,
      "title": "@cword(5,20)",
      "price|0-99999": 1,
      "date": "@date",
      "cid" : "@integer(1-14)"
    }
  ]

})