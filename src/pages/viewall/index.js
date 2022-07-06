import React, { useEffect, useState } from "react";
import Header from "../../component/header";
import MultiActionAreaCard from "../../component/card";
import {
  Alert,
  Box,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import Footer from "../../component/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAction,
  getAllProductAction,
  getGroupModelAction,
  getMerkAction,
  getModelAction,
} from "../../redux/actions/product";

function ViewAll() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const merk = useSelector((state) => state.merk.merk.merk);

  const groupModel = useSelector((state) => state.groupModel.groupModel);
  const model = useSelector((state) => state.model.model);
  const product = useSelector((state) => state.allProduct.product);
  console.log(model);
  const [open, setOpen] = useState(false);
  const [master, setMaster] = useState({
    brand_id: null,
    group_model_id: null,
    model_id: null,
    tahun: "",
    status: "",
    plat_nomor: "",
    nama_penjual: "",
    alamat: "",
    telp: "",
    image: null,
  });
  const [filter,setFilter]=useState({
    brand_id: null,
    group_model_id: null,
    model_id: null,
  })
  const [isError, setIsError] = useState(false);
  const [isError1, setIsError1] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
    setIsSuccess(false);
    setIsError(false);
    setIsError1(false);
  };
  const handleFilter = (value) => {
    setFilter({ ...filter, brand_id: value.target.value });
  };
  const handleFilter1 = (value) => {
    setFilter({ ...filter, group_model_id: value.target.value });
  };
  const handleFilter2 = (value) => {
    setFilter({ ...filter, model_id: value.target.value });
  };
  const handleChange = (value) => {
    setMaster({ ...master, brand_id: value.target.value });
  };
  const handleChange1 = (value) => {
    setMaster({ ...master, group_model_id: value.target.value });
  };
  const handleChange2 = (value) => {
    setMaster({ ...master, model_id: value.target.value });
  };
  const handleChange3 = (value) => {
    setMaster({ ...master, tahun: value.target.value });
  };
  const handleChange4 = (value) => {
    setMaster({ ...master, status: value.target.value });
  };
  const handleChange5 = (value) => {
    setMaster({ ...master, plat_nomor: value.target.value });
  };
  const handleChange6 = (value) => {
    setMaster({ ...master, nama_penjual: value.target.value });
  };
  const handleChange7 = (value) => {
    setMaster({ ...master, alamat: value.target.value });
  };
  const handleChange8 = (value) => {
    setMaster({ ...master, telp: value.target.value });
  };
  const handleChange9 = (value) => {
    console.log(value.target.files[0]);
    setMaster({ ...master, image: value.target.files[0] });
  };
  const handleGetFilter=async()=>{
    try {
      await dispath(getAllProductAction(filter));
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleAdd = async () => {
    try {
      setIsError(false);
      setIsError1(false);
      if (
        master.brand_id === null ||
        master.group_model_id === null ||
        master.model_id === null ||
        master.alamat === "" ||
        master.nama_penjual === "" ||
        master.plat_nomor === "" ||
        master.status === "" ||
        master.tahun === "" ||
        master.telp === ""
      ) {
        return setIsError1(true);
      }
      if (master.image === null) {
        return setIsError(true);
      }
      const body = new FormData();
      body.append("image", master.image);
      body.append("brand_id", master.brand_id);
      body.append("group_model_id", master.group_model_id);
      body.append("model_id", master.model_id);
      body.append("tahun", master.tahun);
      body.append("status", master.status);
      body.append("plat_nomor", master.plat_nomor);
      body.append("nama_penjual", master.nama_penjual);
      body.append("alamat", master.alamat);
      body.append("telp", master.telp);

      await dispath(createProductAction(body));
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  const getMaster = async () => {
    try {
      const param = {};
      await dispath(getAllProductAction(param));
      await dispath(getMerkAction());
      await dispath(getGroupModelAction());
      await dispath(getModelAction());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMaster();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#E9ECEB" }}>
      <Header />
      <Paper elevation={3} sx={{ m: 3, p: 3 }}>
        <Box>
          <Box sx={{display:"flex",flexDirection:"row", justifyContent:'space-between'}}>
          <FormControl fullWidth sx={{ mr: 2 }}>
            <InputLabel id="demo-simple-select-label">merk</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={master.merk}
              label="merk"
              onChange={(value) => handleFilter(value)}
            >
              {Array.isArray(merk) &&
                merk.length > 0 &&
                merk.map((item, idx) => {
                  return (
                    <MenuItem value={item.id} key={idx}>
                      {item.brand}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mr: 2 }}>
            <InputLabel id="demo-simple-select-label">Group Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={master.group_model}
              label="group model"
              onChange={(e) => handleFilter1(e)}
            >
              {Array.isArray(groupModel) &&
                groupModel.length > 0 &&
                groupModel.map((item, idx) => {
                  return (
                    <MenuItem value={item.id} key={idx}>
                      {item.grup_model}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
            <FormControl fullWidth sx={{ mr: 2 }}>
              <InputLabel id="demo-simple-select-label">Model</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={master.model}
                label="model"
                onChange={(value) => handleFilter2(value)}
              >
                {Array.isArray(model) &&
                  model.length > 0 &&
                  model.map((item, idx) => {
                    return (
                      <MenuItem value={item.id} key={idx}>
                        {item.model}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <Button
            variant="contained"
            sx={{  fontSize:12,fontWeight:"bold"}}
            color="secondary"
            onClick={handleGetFilter}
          >
            Filter
          </Button>
          </Box>
          <Grid container spacing={1} sx={{ mt: 3, ml: 3 }}>
            {Array.isArray(product) &&
              product.length > 0 &&
              product.map((item, idx) => {
                return (
                  <Grid
                    key={idx}
                    item
                    onClick={() => navigate(`/detail/${item.id}`)}
                  >
                    <MultiActionAreaCard product={item} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "50px", fontSize: 28 }}
            color="secondary"
            onClick={handleOpen}
          >
            +
          </Button>
        </Box>
      </Paper>
      <Footer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          component="div"
          sx={{
            width: "50%",
            backgroundColor: "#fff",
            borderRadius: 2,
            p: 3,
            overflow: "auto",
            height: "50%",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Add Vehicle
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">merk</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={master.merk}
              label="merk"
              onChange={(value) => handleChange(value)}
            >
              {Array.isArray(merk) &&
                merk.length > 0 &&
                merk.map((item, idx) => {
                  return (
                    <MenuItem value={item.id} key={idx}>
                      {item.brand}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Group Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={master.group_model}
              label="group model"
              onChange={(e) => handleChange1(e)}
            >
              {Array.isArray(groupModel) &&
                groupModel.length > 0 &&
                groupModel.map((item, idx) => {
                  return (
                    <MenuItem value={item.id} key={idx}>
                      {item.grup_model}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={master.model}
              label="model"
              onChange={(value) => handleChange2(value)}
            >
              {Array.isArray(model) &&
                model.length > 0 &&
                model.map((item, idx) => {
                  return (
                    <MenuItem value={item.id} key={idx}>
                      {item.model}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <TextField
            onChange={(e) => handleChange3(e)}
            // variant="filled"
            label="tahun"
            // helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              mt: 2,
            }}
          />
          <TextField
            onChange={(e) => handleChange4(e)}
            // variant="filled"
            label="status"
            // helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              mt: 2,
            }}
          />
          <TextField
            onChange={(e) => handleChange5(e)}
            // variant="filled"
            label="plat nomor"
            // helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              mt: 2,
            }}
          />
          <TextField
            onChange={(e) => handleChange6(e)}
            // variant="filled"
            label="nama penjual"
            // helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              mt: 2,
            }}
          />
          <TextField
            onChange={(e) => handleChange7(e)}
            // variant="filled"
            label="alamat"
            // helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              mt: 2,
            }}
          />
          <TextField
            onChange={(e) => handleChange8(e)}
            // variant="filled"
            label="telpon"
            // helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              mt: 2,
            }}
          />
          <Input
            onChange={(e) => handleChange9(e)}
            type="file"
            label="gambar"
            // helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              mt: 2,
            }}
          />
          {isError ? (
            <>
              <Alert severity="error" sx={{ my: 2 }}>
                image harus ada
              </Alert>
            </>
          ) : null}
          {isError1 ? (
            <>
              <Alert severity="error" sx={{ my: 2 }}>
                Field harus terisi
              </Alert>
            </>
          ) : null}
          {isSuccess ? (
            <>
              <Alert severity="success" sx={{ my: 2 }}>
                success create
              </Alert>
            </>
          ) : null}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "end" }}>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              add
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default ViewAll;
