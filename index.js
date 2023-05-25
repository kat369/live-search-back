const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./db");
const app = express();
const articles = require("./model/articlemodel");
app.use(cors());

connectMongoDB();

app.use(express.json());

// karthi i just used this create function to create some test articles so ignore this create() and if you want to try this function call this create() function at line no 25!
async function create() {
  const newarticle = await articles.create({
    article: "web development",
    author: "kathiravan karthieeswari",
    keywords: "html css js",
    abstract:
      "In recent times, synthetic dyes are more widely used than natural dyes. However, natural dyes are eco-benign and harmless. In the growing demand for eco-friendly coloring agents in process industries such as food, textiles, leather, and others, natural dyes have high potential. The manufacture and the use of the same necessitate better raw materials and processing methods. These natural dyes could also be obtained from waste vegetable materials such as peels, shells, seeds.",
    referance:
      "O. Ersin, M. M. Mete, S. Gunay, and H. Azeri, Natural dyestuff extraction from onion (Allium cepa) skin and utilization for leather dyeing. Journal of Textiles and Engineer 19 (2012), No. 88, p. 1-7.",
  });
  console.log(newarticle);
}

app.get("/search", async (req, res) => {
  try {
    const { key, limit } = req.query;
    const search = key
      ? {
          $or: [
            { article: { $regex: key, $options: "i" } },
            { author: { $regex: key, $options: "i" } },
            { keywords: { $regex: key, $options: "i" } },
            { abstract: { $regex: key, $options: "i" } },
            { referance: { $regex: key, $options: "i" } },
          ],
        }
      : {};
    const data = await articles.find(search).limit(limit);
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
