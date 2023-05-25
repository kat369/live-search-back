app.get("/files", async (req, res) => {
  try {
    const data = await articles.find({
      year: +req.query.year,
      issue: +req.query.issue,
    });

    if (data.length > 0) {
      res.json({ data });
    } else {
      res.json({ message: "no data found" });
    }
  } catch (error) {
    console.log(error);
  }
});

////////////////////////////////////////////////////front end code //////////////////////////////////
const [data, setdata] = useState([]);


let loadData = async () => {
      try {
        let searchdata = await axios.get(
          `http://localhost:5000/files?year=${year}&issue=${issue}`
        );
        setdata(searchdata.data.data);
      } catch (error) {
        console.log(error);
      }
    };
