import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">
                            Personal Digital Assistants
                        </p>
                    </div>
                </section>
            </div>

            <div className="container">
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-3">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Amazon Alexa, also known simply as Alexa, is a virtual assistant technology largely based on a Polish speech synthesiser named Ivona, bought by Amazon in 2013."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana is Microsoft's personal productivity assistant that helps you save time and focus attention on what matters most."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, tvOS, and audioOS operating systems."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;