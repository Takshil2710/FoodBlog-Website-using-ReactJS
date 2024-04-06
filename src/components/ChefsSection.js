import ChefCard from "./ChefCard"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Eduardo Garcia",
            img: "/img/top-chefs/img_1.jpg",
            cuisine: "Mexican",
        },
        {
            name: "Kei Kobayashi",
            img: "/img/top-chefs/img_2.jpg",
            cuisine: "Japanese",
        },
        {
            name: "Fabio Viviani",
            img: "/img/top-chefs/img_3.jpg",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/img/top-chefs/img_4.jpg",
            cuisine: "American"
        },
        {
            name: "Alain Passard",
            img: "/img/top-chefs/img_5.jpg",
            cuisine: "French"
        },
        {
            name: "Sanjeev Kapoor",
            img: "/img/top-chefs/img_6.jpg",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chiefs-container">
                {/* <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard /> */}
                { chefs.map(chef => <ChefCard key={chef.name} chef={chef} />) }
            </div>
        </div>
    )
}