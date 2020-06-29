import express from 'express'
import db from './models/index'
const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: express.Router = express.Router()

// Create (option: set 'attr1' to requestBody)
router.post("/", (req:express.Request, res:express.Response) => {
  let param: string = "default value"
  if (req.body.attr1) {
    param = req.body.attr1
  }
  db.TestClass.create({
    attr1: param,
  }).then(() => {
    res.send("Data Created.");
  }).catch((err: any) => {
    res.send("Created Error. " + err);
  });
})
// Read (all)
router.get("/", function (req: express.Request, res: express.Response) {
  db.TestClass.findAll()
  .then((record: any) => {
    res.send(record)
  })
});
// Read (by id)
router.get("/:id", function (req: express.Request, res: express.Response) {
  db.TestClass.findByPk(req.params.id)
  .then((record: any) => {
    res.send(record)
  })
});
// Update (by id)
router.put("/:id", function (req: express.Request, res: express.Response) {
  const values = {
    attr1: "updated!"
  }
  const options = {
    where: {
      id: req.params.id
    }
  }
  db.TestClass.update(values, options)
  .then((result: any) => {
    res.send(result)
  })
});
// Delete (by id)
router.delete("/:id", function (req: express.Request, res: express.Response) {
  const options = {
    where: {
      id: req.params.id
    }
  }
  db.TestClass.destroy(options)
  .then(() => {
    res.sendStatus(200)
  })
});
app.use(router)

app.listen(3000, () => console.log("Example app listening on port 3000!"))
