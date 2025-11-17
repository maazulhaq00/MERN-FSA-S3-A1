import { Helmet } from 'react-helmet-async';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditProducts = () => {
  const apiUrl = "http://localhost:3001"
  const navigate = useNavigate();
  const { id } = useParams();

  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: ""
  })

  const [alert, setAlert] = useState({
    success: true,
    message: ""
  })
  const fetchProducts = async () => {
    try {
      let res = await axios.get(`${apiUrl}/products/${id}`)
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
  const handleProductInputChange = (e) => {
    let { name, value } = e.target
    // setCategory({
    //     ...category,
    //     [name]: value
    // })
    setProducts((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleProductEdit = async () => {
    try {
      const res = await axios.put(`${apiUrl}/products/${id}`, products)
      setAlert({
        success: res.data.success,
        message: res.data.message
      })
      navigate('/products')
    }
    catch (err) {
      console.log(err);

      setAlert({
        success: false,
        message: "Fail to update products"
      })
    }
  }
  return (
    <>
      <Helmet>
        <title>
          Edit Product | Ecomm App
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
                Create Product
              </Typography>
            </div>
            <div>
              <Grid
                container
                spacing={3}
              >

                <Grid
                  xs={12}
                  md={8}
                >
                  <Card sx={{ p: 3 }}>
                    {
                      alert.message && <Alert sx={{ mb: 2 }}
                        severity={alert.success ? "success" : "error"}>
                        {alert.message}
                      </Alert>
                    }

                    <Box sx={{ maxWidth: 420 }}>

                      <Stack spacing={3}>
                        <TextField
                          fullWidth
                          label="Product Name"
                          name="name"
                          value={products.name}
                          onChange={handleProductInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Product Description"
                          name="description"
                          value={products.description}
                          onChange={handleProductInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Product Price"
                          name="price"
                          value={products.price}
                          onChange={handleProductInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Product Image"
                          name="image"
                          value={products.image}
                          onChange={handleProductInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Product Category"
                          name="category"
                          value={products.category.name}
                          onChange={handleProductInputChange}

                        />

                      </Stack>

                      <Box sx={{ mt: 3 }}>
                        <Button
                          color="primary"
                          size="large"
                          type="submit"
                          variant="contained"
                          onClick={handleProductEdit}
                        >
                          Add Category
                        </Button>
                      </Box>
                    </Box>
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

export default EditProducts;
