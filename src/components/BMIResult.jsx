import GaugeComponent from "react-gauge-component";
import BMITipsDialogBox from "./BMITipsDialogBox";

const BMIResult = ({ bmi }) => {
    let message = '';

    if (bmi < 18.5) {
        message = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        message = 'Overweight';
    } else {
        message = 'Obesity';
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-neutral-800 font-semibold text-base lg:text-lg">Your BMI is: {bmi}</h2>
                    <p className="text-neutral-800 font-semibold text-base lg:text-lg">Result: {message}</p>
                </div>
                <div className="w-full lg:w-auto -mt-2 mb-6 lg:mt-0 lg:mb-0 flex justify-center items-center">
                    <button className="w-12 h-9 lg:w-16 lg:h-12 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
                        <BMITipsDialogBox />
                    </button>
                </div>
            </div>
            <GaugeComponent
            className="-mb-4 lg:mt-4"
                type="semicircle"
                arc={{
                    width: 0.2,
                    padding: 0.005,
                    cornerRadius: 1,
                    subArcs: [
                        { limit: 18.5, color: 'red', showTick: true, tooltip: { text: 'Underweight' } },
                        { limit: 24.9, color: 'green', showTick: true, tooltip: { text: 'Normal' } },
                        { limit: 29.9, color: 'yellow', showTick: true, tooltip: { text: 'Overweight' } },
                        { color: '#EA4225', tooltip: { text: 'Obesity' } }
                    ]
                }}
                pointer={{
                    color: '#345243',
                    length: 0.80,
                    width: 15,
                }}
                labels={{
                    valueLabel: { formatTextValue: value => value },
                    tickLabels: {
                        type: 'outer',
                        valueConfig: { formatTextValue: value => value, fontSize: 10 },
                        ticks: [
                            { value: "Underweight" },
                            { value: "Normal" },
                            { value: "Obese" }
                        ],
                    }
                }}
                value={parseFloat(bmi)}
                minValue={10}
                maxValue={40}
            />
        </div>
    );
};

export default BMIResult;