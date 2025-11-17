import { Helmet } from 'react-helmet-async';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import {

  Box,
  IconButton,
  Card,
  Container,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useState, useEffect } from 'react';


const DisplayProducts = () => {

  const apiUrl = "http://localhost:3001"

  const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  const [alert, setAlert] = useState({
    success: true,
    message: ""
  })


  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products`)

      console.log(res);

      setProducts(res.data.products)

    }
    catch (err) {
      console.log(err);

      setAlert({
        success: false,
        message: "Fail to fetch Products"
      })

    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  const deleteProducts = async (id) => {
    try {
      const res = await axios.delete(`${apiUrl}/products/${id}`)
      setAlert({
        success: res.data.success,
        message: res.data.message
      })

    } catch (err) {
      console.log(err);

      setAlert({
        success: false,
        message: "Fail to delete Products"
      })
    }
    fetchProducts()
  }
  const EditProducts = async (id) => {
    navigate(`/edit-products/${id}`)
  }

  return (
    <>
      <Helmet>
        <title>
          Products | Ecomm App
        </title>
      </Helmet>
      <Box
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">
                Categories
              </Typography>
            </div>
            <div>
              <Grid
                container
                spacing={3}
              >

                <Grid
                  xs={12}
                  md={10}
                >
                  <Card sx={{ p: 3 }}>
                    {
                      alert.message && <Alert sx={{ mb: 2 }}
                        severity={alert.success ? "success" : "error"}>
                        {alert.message}
                      </Alert>
                    }


                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Products Name</TableCell>
                            <TableCell align="left">Products Description</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>

                          {
                            products.map((product) => {
                              return <TableRow key={product._id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <img src={`${apiUrl}/uploads/${product.image}`}  width="200" alt="" />
                                <TableCell>{product.category.name}</TableCell>
                                <TableCell>
                                  <Stack direction="row" spacing={1}>
                                    <IconButton aria-label="delete" onClick={() => EditProducts(product._id)}>
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => deleteProducts(product._id)}>
                                      <DeleteIcon />
                                    </IconButton>
                                  </Stack>
                                </TableCell>
                              </TableRow>
                            })
                          }

                        </TableBody>
                      </Table>
                    </TableContainer>

                  </Card>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default DisplayProducts;
