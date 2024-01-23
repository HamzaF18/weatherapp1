import "./FAQ.css"

const FAQ = () => {
    return (
        <div className="faq-container">
            <div className="title"><h1>Frequently Asked Questions</h1></div>
            <div className="sub-title"><h2>Freqentley asked question 1</h2></div>
            <div className="info-box"><p><strong><span>How can I stay warm in cold weather?</span> You</strong> can stay warm in winter by making sure you always wear layers of clothing whenever you are inside or outside. Drinking hot drinks and having your home heating on is the most effective way of not catching a cold during the winter.</p></div>
            <div className="sub-title"><h2>Freqentley asked question 2</h2></div>
            <div className="info-box"><p><strong><span>What to do in high air polluted locations?</span>Firstly,</strong> activities that require heavy breathing should be minimized, as this will cause more consumption of polluted air. Seondly, try and go out earlier in the day as the air quality tends to be better. Thirdly, keep the car windows closed in high pollutedf areas.</p></div>
        </div>
    )
}
export default FAQ;