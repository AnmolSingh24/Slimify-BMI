const Tips = ({ category }) => {
    console.log(category)
    const getTips = () => {
        switch (category) {
            case 'Underweight':
                return (
                    <div>
                        <h3 className='text-center text-neutral-800 font-semibold mb-4'>Tips for Underweight:</h3>
                        <ol>
                            <li>1. Eat more frequently.</li>
                            <li>2. Choose nutrient-rich foods.</li>
                            <li>3. Try smoothies and shakes.</li>
                            <li>4. Watch when you drink.</li>
                        </ol>
                        <h3 className="text-center text-neutral-800 font-semibold mt-6 mb-4">Read the description below: </h3>
                        <p className="text-green-500">Veg Foods 🟢</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Nuts and Seeds</b>: Almonds, walnuts, chia seeds, flaxseeds.</li>
                            <li>2. <b>Whole Grains</b>: Brown rice, quinoa, whole wheat bread.</li>
                            <li>3. <b>Healthy Fats</b>: Avocado, olive oil, coconut oil.</li>
                            <li>4. <b>Dairy</b>: Full-fat yogurt, cheese, milk.</li>
                            <li>5. <b>Legumes</b>: Lentils, chickpeas, black beans.</li>
                        </ol>

                        <p className="text-red-500 mt-4">Non-Veg Foods 🔴</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Lean Proteins</b>: Chickens breast, turkey, fish.</li>
                            <li>2. <b>Seafood</b>: Salmon tuna.</li>
                            <li>3. <b>Eggs</b>: Whole Eggs, Omelets.</li>
                        </ol>

                        <p className="text-orange-500 mt-4">Fruits 🟠</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Bananas</b>: High in calories and nutrients.</li>
                            <li>2. <b>Mangoes</b>: Rich in vitamins and calories.</li>
                            <li>3. <b>Avocados</b>: High in healthy fats.</li>
                            <li>4. <b>Berries</b>: Strawberries, blueberries, raspberries.</li>
                            <li>5. <b>Grapes</b>: High in natural sugars and calories.</li>
                        </ol>
                    </div>
                );
            case 'Normal weight':
                return (
                    <div>
                        <h3 className='text-center text-neutral-800 font-semibold mb-4'>Maintain a Healthy Weight:</h3>
                        <ol className="text-neutral-800">
                            <li>1. Continue eating a balanced diet.</li>
                            <li>2. Stay physically active.</li>
                            <li>3. Monitor your weight regularly.</li>
                            <li>4. Stay hydrated.</li>
                        </ol>
                        <h3 className="text-center text-neutral-800 font-semibold mt-6 mb-4">Read the description below: </h3>
                        <p className="text-green-500">Veg Foods 🟢</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Lean Proteins</b>: Tofu, legumes.</li>
                            <li>2. <b>Whole Grains</b>: Brown rice, quinoa, oats.</li>
                            <li>3. <b>Vegetables</b>: Leafy greens, broccoli, carrots.</li>
                            <li>4. <b>Healthy fats</b>: Olive oil, nuts, seeds.</li>
                            <li>5. <b>Dairy</b>: Low-fat yogurt, milk, cheese.</li>
                        </ol>

                        <p className="text-red-500 mt-4">Non-Veg Foods 🔴</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Lean Proteins</b>: Chicken, fish.</li>
                            <li>2. <b>Eggs</b>: Scrambled, boiled, omelets.</li>
                        </ol>

                        <p className="text-orange-500 mt-4">Fruits 🟠</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Apples</b>: High in fiber and vitamin.</li>
                            <li>2. <b>Oranges</b>: Rich in vitamin C.</li>
                            <li>3. <b>Berries</b>: Strawberries, blueberries, blackberries.</li>
                            <li>4. <b>Grapes</b>: Hydrating and nutritious.</li>
                            <li>5. <b>Kiwi</b>: High in vitamin C and fiber.</li>
                        </ol>
                    </div>
                );
            case 'Overweight':
                return (
                    <div>
                        <h3 className='text-center text-neutral-800 font-semibold mb-4'>Tips for Overweight:</h3>
                        <ol>
                            <li>1. Eat more fruits and vegetables.</li>
                            <li>2. Reduce intake of sugars and fats.</li>
                            <li>3. Exercise regularly.</li>
                            <li>4. Monitor your portion sizes.</li>
                        </ol>
                        <h3>Read the description below: </h3>
                        <p className="text-green-500">Veg Foods 🟢</p>
                        <ol>
                            <li>1. <b>Vegetables</b>: Leafy greens, broccoli, cauliflower.</li>
                            <li>2. <b>Lean Proteins</b>: Tofu, legumes.</li>
                            <li>3. <b>Whole Grains</b>: Quinoa, brown rice, whole wheat bread.</li>
                            <li>4. <b>Legumes</b>: Lentils, chickpeas, black beans.</li>
                            <li>5. <b>Nuts and Seeds</b>: Almonds, chia seeds, flaxseeds (in moderation).</li>
                        </ol>

                        <p className="text-red-500 mt-4">Non-Veg Foods 🔴</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Lean Proteins</b>: Chicken breast, turkey, fish.</li>
                            <li>2. <b>Seafood</b>: Salmon, mackerel</li>
                            <li>3. <b>Eggs</b>: Scrambled, boiled, poached.</li>
                        </ol>

                        <p className="text-orange-500 mt-4">Fruits 🟠</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Berries</b>: Strawberries, blueberries, raspberries.</li>
                            <li>2. <b>Apples</b>: High in fiber.</li>
                            <li>3. <b>Oranges</b>: Low in calories, High in vitamin C.</li>
                            <li>4. <b>Pears</b>: High in fiber.</li>
                            <li>5. <b>Kiwi</b>: Low in calories, High in vitamin C.</li>
                        </ol>
                    </div>
                );
            case 'Obesity':
                return (
                    <div>
                        <h3 className='text-center text-neutral-800 font-semibold mb-4'>Tips for Obese:</h3>
                        <ol>
                            <li>1. A healthcare provider.</li>
                            <li>2. Create a healthy eating plan.</li>
                            <li>3. Increase physical activity.</li>
                            <li>4. Join a support group or program.</li>
                        </ol>
                        <h3 className="text-center text-neutral-800 font-semibold mb-4">Read the description below: </h3>
                        <p className="text-green-500">Veg Foods 🟢</p>
                        <ol>
                            <li>1. <b>Vegetables</b>: Spinach, kale, broccoli, Brussels sprouts.</li>
                            <li>2. <b>Lean Proteins</b>: Tofu, legumes.</li>
                            <li>3. <b>Whole Grains</b>: Quinoa, brown rice, whole wheat pasta.</li>
                            <li>4. <b>Legumes</b>: Lentils, chickpeas, black beans.</li>
                            <li>5. <b>Nuts and Seeds</b>: Almonds, chia seeds, flaxseeds (in moderation).</li>
                        </ol>

                        <p className="text-red-500 mt-4">Non-Veg Foods 🔴</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Lean Proteins</b>: Skinless Chicken, Turkey, Fish.</li>
                            <li>2. <b>Seafood</b>: Tuna, Cod</li>
                            <li>3. <b>Eggs</b>: Scrambled, Boiled, Omelets.</li>
                        </ol>

                        <p className="text-orange-500 mt-4">Fruits 🟠</p>
                        <ol className="text-neutral-800">
                            <li>1. <b>Berries</b>: Strawberries, blueberries, blackberries.</li>
                            <li>2. <b>Apples</b>: High in fiber and nutrients.</li>
                            <li>3. <b>Oranges</b>: High in vitamin C.</li>
                            <li>4. <b>Pears</b>: High in fiber.</li>
                            <li>5. <b>Grapefruits</b>: Low in calories and refreshing..</li>
                        </ol>
                    </div>
                );
            default:
                return null;
        }
    };
    return <div>{getTips()}</div>;
};

export default Tips;