import "./FAQ.css"

const FAQ = () => {
    return (
        <div className="faq-container">
            <div className="title"><h1>Frequently Asked Questions</h1></div>
            <div className="FAQ-questions">
                <div className="faq-question">
                    <div className="sub-title"><h2>Freqentley asked question 1</h2></div>
                    <div className="info-box"><p><strong><span>How can I stay warm in cold weather?</span> You</strong> can stay warm in winter by making sure you always wear layers of clothing whenever you are inside or outside. Drinking hot drinks and having your home heating on is the most effective way of not catching a cold during the winter.</p></div>
                </div>
                <div className="faq-question">
                    <div className="sub-title"><h2>Freqentley asked question 2</h2></div>
                    <div className="info-box"><p><strong><span>What to do in high air polluted locations?</span>Firstly,</strong> activities that require heavy breathing should be minimized, as this will cause more consumption of polluted air. Seondly, try and go out earlier in the day as the air quality tends to be better. Thirdly, keep the car windows closed in high pollutedf areas.</p></div>
                </div>
                <div className="faq-question">
                    <div className="sub-title"><h2>Frequently asked question 3</h2></div>
                    <div className="info-box"><p><strong><span>Why is climate change considered bad?</span></strong> Climate change is a big threat to our health. Air pollution diseases, extreme weather events, increased hunger and poor nutrition in places where people cannot grow or find food has all came from climate change.</p></div>
                </div>
                <div className="faq-question">
                    <div className="sub-title"><h2>Frequently asked question 3</h2></div>
                    <div className="info-box"><p><strong><span>Why is climate change considered bad?</span></strong> Climate change is a big threat to our health. Air pollution diseases, extreme weather events, increased hunger and poor nutrition in places where people cannot grow or find food has all came from climate change.</p></div>
                </div>
                <div className="faq-question">
                    <div className="sub-title"><h2>Frequently asked question 3</h2></div>
                    <div className="info-box"><p><strong><span>Why is climate change considered bad?</span></strong> Climate change is a big threat to our health. Air pollution diseases, extreme weather events, increased hunger and poor nutrition in places where people cannot grow or find food has all came from climate change.</p></div>
                </div>
                <div className="faq-question">
                </div>




            </div>
            <div className="content-2">
                <h1>Severe Weather</h1>
                <div className="winter">
                    <h2>Winter</h2>
                    <p>The weather conditions in the winter are extremely harsh. With temperatures reaching up to -5 in the UK, taking care of your health is a top priority.
                        <ul>Dangers from low temperature exposure include:
                            <li>Frostbite</li>
                            <li>Hypothermia</li>
                        </ul>
                    </p>
                </div>
                <div className="summer">
                    <h3>Summer</h3>
                    <p>The weather conditions in the summer are severe in the majority of countries. With temperatures reaching up to 40 C, taking care of your health is a priority.
                        <ul>Dangers from high temperature exposure include:
                            <li>Heatstroke</li>
                            <li>Hyperthermia</li>
                            <li>Heat rashes</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default FAQ;