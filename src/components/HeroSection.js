import CustomImage from "./CustomImage";

export default function HeroSection() {
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ];

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Welcome to FoodWeb, your ultimate destination for satisfying your culinary cravings and exploring mouthwatering recipes from around the globe! At FoodWeb, we're dedicated to providing you with an array of delightful dishes, all conveniently accessible on our platform. Whether you're a seasoned chef or a novice in the kitchen, our extensive collection of recipes caters to all skill levels and tastes.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    );
}