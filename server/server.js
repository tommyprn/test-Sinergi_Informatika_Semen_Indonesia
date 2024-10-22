const PDFExtract =
  require("pdf.js-extract").PDFExtract;
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs-extra");

const app = express();
const PORT = 8080;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const pdfExtract = new PDFExtract();

app.use(cors());

app.get("/api/uploadFile/:name", (req, res) => {
  const { name } = req.params;
  // let file =

  const pdf = pdfExtract.extract(
    "/uploads/" + name,
    {},
    (err, data) => {
      if (err) return console.log(err);

      const arr = data.pages[0].content.map(
        (item) => {
          return item.str;
        }
      );

      const dataToReturn = {
        a:
          arr[12] +
          " " +
          arr[19] +
          " : " +
          arr[253] +
          arr[255] +
          arr[257] +
          arr[259] +
          arr[261] +
          arr[263] +
          arr[265] +
          arr[267] +
          arr[269] +
          arr[271],
        b: arr[13] + " " + arr[22],
        c: arr[28],
        d:
          arr[30] +
          " : " +
          arr[38] +
          arr[35] +
          arr[40] +
          arr[46] +
          arr[34] +
          arr[54] +
          arr[41] +
          arr[49] +
          arr[37] +
          arr[46] +
          arr[43] +
          arr[45] +
          arr[51] +
          arr[52] +
          arr[56],
        e: arr[59],
        f: arr[62] + " : " + arr[64],
        g: arr[66],
        h:
          arr[83] +
          " " +
          arr[68] +
          arr[69] +
          " : " +
          arr[276],
        i:
          arr[85] +
          " " +
          arr[71] +
          " : " +
          arr[278],
        j:
          arr[87] +
          " " +
          arr[73] +
          " : " +
          arr[280],
        k:
          arr[89] +
          " " +
          arr[75] +
          " " +
          arr[76] +
          " " +
          arr[77],
        l:
          arr[91] +
          " " +
          arr[79] +
          " : " +
          arr[280],
        m:
          arr[93] +
          " " +
          arr[81] +
          arr[82] +
          " : " +
          arr[280],
        n:
          arr[100] +
          " " +
          arr[102] +
          "(" +
          arr[104] +
          "/" +
          arr[108] +
          ")" +
          " : " +
          arr[106] +
          "/" +
          arr[114],
        o: arr[132] + " " + arr[135],
        p:
          arr[141] +
          " " +
          arr[143] +
          " " +
          arr[144],
        q: arr[151] + " " + arr[153],
        r: arr[155] + " " + arr[157],
        s: arr[159] + " " + arr[161],
        t: arr[163],
        u:
          arr[165] +
          " " +
          arr[168] +
          " : " +
          arr[170] +
          arr[172] +
          arr[174] +
          arr[176] +
          arr[178] +
          arr[180] +
          arr[182] +
          arr[184] +
          arr[186] +
          arr[188] +
          arr[190] +
          arr[192] +
          arr[194] +
          arr[196] +
          arr[198],
        v:
          arr[201] +
          " " +
          arr[200] +
          " : " +
          arr[205],
        w:
          arr[207] +
          " " +
          arr[209] +
          " : " +
          arr[215] +
          arr[217] +
          "/" +
          arr[219] +
          arr[221] +
          "/" +
          arr[223] +
          arr[225] +
          arr[227] +
          arr[229],
        x:
          arr[231] +
          " " +
          arr[233] +
          " : " +
          arr[237],
        y:
          arr[241] +
          " " +
          arr[243] +
          " : " +
          arr[240] +
          " " +
          arr[239],
        z: "H. Bukti pemotongan/ pemungutan pph",
      };

      res.json(dataToReturn);
    }
  );
});

app.post(
  "/api/uploadFile",
  upload.single("file"),
  (req, res) => {
    res.json(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
