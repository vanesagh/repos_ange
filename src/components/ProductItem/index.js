import { Grid, Stack, Divider } from "@mui/material";
import { useRouter } from "next/router";


export default function ProductItem({ product }) {
    const router = useRouter();
    const path = router.pathname;
    console.log(path);
    return (

        <Grid container spacing={2} sx={{ pb: "10%" }}>
            <Grid item md={12} spacing={4}>
                <Stack spacing={2}>
                    <h3>{product.name}</h3>
                    <div>{product.description}</div>
                    <div>Precio: {product.price} MXP</div>
                </Stack>
            </Grid>

        </Grid>



    );
};