import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material";

export default function ImageProductsList({ products }) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const imageListStyles = {
        width: isMobile ? 300 : 700,
        height: 'auto',
        overflowY: 'hidden'

    };
    //console.log(products)
    return (
        <ImageList sx={imageListStyles} cols={isMobile ? 1 : 2}>
            {products.map((product) => (
                < ImageListItem key={product.id} >
                    <img
                        src={product.imageUrl}
                    />
                    <ImageListItemBar
                        title={product.name}
                        subtitle={`$${product.price} MXP - ${product.presentation.name}`}

                    />
                </ImageListItem>
            ))
            }


        </ImageList >);
};