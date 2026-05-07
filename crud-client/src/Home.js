import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";

const Home = () => {
    return (
        <header>
            <h1>Placement Portal</h1>


            <div class="home">
                <h2>Welcome to Campus Placement</h2>
                <p>Manage Students and Companies for Placement</p>

                <section className="cards">
                    <div className="card1">
                        <img src={img1} />
                    </div>

                    <div className="card2">
                        <img src={img2} />
                    </div>

                    <div className="card3">
                        <img src={img3} />
                    </div>

                    <div className="card4">
                        <img src={img4} />
                    </div>
                </section>

                <button className="button3">Apply</button>
                <button className="button3">View Company</button>

            </div>
        </header>
    )
}

export default Home;