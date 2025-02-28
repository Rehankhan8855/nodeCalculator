const calculatorcontroller ={
    calculate:(req,res)=>{
        try{
            const {num1,num2,operator} = req.query;

            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);

            let result;

            switch(operator) {
                case 'add':
                    result =number1 + number2;
                    break;

                case 'subtract':
                    result =number1 - number2;
                    break;

                case 'multiply':
                    result = number1 * number2;
                    break;

                case 'divide':
                    if (number2 ===0){
                        return res.status(400).json({error:'cannot divide by zero'});
                    }
                    result = number1 / number2;
                    break;
                    default:
                        return res.status(400).json({error:'Invalid operation. Use add, subtract, multiply, or divide' })
            }
            return res.json({
                result: result,
                operator:operator,
                num1:number1,
                num2:number2
            });

        }catch (error) {
            return res.status(500).json({error: 'Invalid input parameters' });
        }
    }
}
module.exports = calculatorcontroller;