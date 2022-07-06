import { Box, Button, CardContent, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../component/footer";
import Header from "../../component/header";
import { getProductByIdAction } from "../../redux/actions/product";

function Detail() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const product = useSelector((state) => state.product.data.result);
  const merk = useSelector((state) => state.product.data.merk.brand);
  const group_models = useSelector(
    (state) => state.product.data.group_models.grup_model
  );
  const models = useSelector((state) => state.product.data.models.model);
  // console.log(merk,group_models,models);
  const getProduct = async () => {
    try {
      dispath(getProductByIdAction(id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Box sx={{ backgroundColor: "#E9ECEB" }}>
      <Header />
      <Paper elevation={3} sx={{ m: 3, p: 3 }}>
        <img
          style={{
            width: "100%",
            height: "300px",
            objectFit: "contain",
            marginBottom: "20px",
          }}
          src={product.image}
          alt="product"
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", ml: 3 }}
          >
            {merk} {group_models} {models}
          </Typography>
          <Paper
            elevation={3}
            sx={{ m: 3, p: 3, display: "flex", flexDirection: "row", pl: 5 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Tahun:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Brand:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Name:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Type:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Status:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Plat Nomor:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Alamat:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Penjual:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Alamat:
              </Typography>
              <Typography variant="h6" sx={{ mr: 5, fontWeight: "bold" }}>
                Telpon:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
              <Typography variant="h6">{product.tahun}</Typography>
              <Typography variant="h6">{merk}</Typography>
              <Typography variant="h6">{group_models}</Typography>
              <Typography variant="h6">{models}</Typography>
              <Typography variant="h6">{product.status}</Typography>
              <Typography variant="h6">{product.plat_nomor}</Typography>
              <Typography variant="h6">{product.alamat}</Typography>
              <Typography variant="h6">{product.nama_penjual}</Typography>
              <Typography variant="h6">{product.alamat}</Typography>
              <Typography variant="h6">{product.telp}</Typography>
            </Box>
          </Paper>
          <Box sx={{ display: "flex", justifyContent: "end", mr: 3 }}>
            <Button variant="contained" onClick={() => navigate("/")}>
              Back
            </Button>
          </Box>
        </CardContent>
      </Paper>
      <Footer />
    </Box>
  );
}

export default Detail;
