/* eslint-disable react/prop-types */
import ImageShow from "./ImageShow"

function ImageList({images}) {
    const renderedImages = images.map((image , index) => {
        return (
            <ImageShow image={image} key={index}/>
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