import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, useMediaQuery } from "@mui/material";

export default function ImageProductsList({ products }) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const imageListStyles = {
        width: isMobile ? 300 : 700,
        height: 'auto',
        overflowY: 'hidden'

    };

    return (
        <ImageList sx={imageListStyles} cols={isMobile ? 1 : 2}>
            {Object.entries(products).map(([categoryName, items]) => (
                <>
                    <ImageListItem key={categoryName} cols={isMobile ? 1 : 2} >
                        <ListSubheader
                            sx={{ backgroundColor: '#744253', color: '#f8c630', fontWeight: 'bolder', fontSize: '20px' }}>
                            {categoryName}</ListSubheader>
                    </ImageListItem >
                    {
                        items.map((product) => (
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
                </>



            ))
            }


        </ImageList >);
};