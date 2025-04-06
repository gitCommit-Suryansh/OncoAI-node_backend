
const fs = require('fs');
const path = require('path');

exports.predict = async (req, res) => {
  console.log(process.env.FLASK_BACKEND_URL)
  const axios = require('axios');
  const FormData = require('form-data');
  const fs = require('fs');

  const form = new FormData();
  form.append('image', fs.createReadStream(req.file.path));

  const response = await axios.post(`${process.env.FLASK_BACKEND_URL}/process-image`, form, {
    headers: form.getHeaders()
  });

  res.json(response.data);
};

exports.check=async(req,res)=>{
    return res.json("working")
}