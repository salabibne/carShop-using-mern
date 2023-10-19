

const Accordian = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What are the financing options available for purchasing a car?
                </div>
                <div className="collapse-content">
                    <p> We offer a variety of financing options, including auto loans, lease agreements, and special financing plans. Our team can help you find the best option to suit your budget and needs.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Do you provide warranty coverage for your vehicles?

                </div>
                <div className="collapse-content">
                    <p>Yes, we offer comprehensive warranty packages for our cars. Our standard warranties cover essential components, and we also have extended warranty options for added peace of mind.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I trade in my current vehicle when purchasing a new one?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! We accept trade-ins, and our experts will assess your vehicle's value. You can use the trade-in value to reduce the cost of your new car or as a down payment on your purchase</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;