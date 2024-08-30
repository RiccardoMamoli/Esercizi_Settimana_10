import CustomGallery from "./CustomGallery";

function Home() {
    return(
        <>
        <CustomGallery saga={'Harry Potter'}/>
        <CustomGallery saga={'Star Wars'} />
        <CustomGallery saga={'Avengers'}/>
        </>
    )
}

export default Home;