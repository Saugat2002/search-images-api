/* eslint-disable react/prop-types */
import ImageShow from "./ImageShow"

function ImageList({images}) {
    const renderedImages = images.map((image) => {
        return (
            <ImageShow image={image} key={image.id}/>
        );
    });

    return(
        <>
            <div className="flex flex-wrap m-5 justify-center">
                {renderedImages}
            </div>
        </>
    );
}

export default ImageList