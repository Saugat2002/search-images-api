/* eslint-disable react/prop-types */
function ImageShow({ image }) {
    console.log(image);
    return (
        <>
            <div className="flex flex-col p-3">
                <img src={image.urls.small} alt={image.alt_description} className="w-full h-[250px]" />
                <span className="text-md italic w-full text-center text-black">{image.alt_description}</span>
            </div>
        </>
    )
}

export default ImageShow