var express = require('express');
var router = express.Router();
// 接続情報を設定
const { MongoClient } = require("mongodb");
//const uri = "mongodb+srv://koh:kohtaroh01xxx@cluster0.y5uxhta.mongodb.net/food?retryWrites=true&w=majority ";
const uri = "mongodb+srv://it222293:IYzoKy6e81Y1u4XG@cluster0.a7li0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);
res.json(note);
})
module.exports = router;