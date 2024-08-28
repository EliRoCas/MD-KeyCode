import Header from "../components/templates/Header";

function Page() {
    return (
        <>
        {/* The components that no have information could close with a simple tag, for example <img/> */}
            <Header list={[
                {url: "./Page.jsx", text:"Home"},
                {url: "./Store.jsx", text:"Store"},
                ]}/> 
        </>
    );
}

export default Page; 
