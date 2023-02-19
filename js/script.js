document.getElementById('triangleCalculate').addEventListener('click', function () {
    const triangleBField = document.getElementById('triangleB');
    const newTriangleBFieldString = triangleBField.value;
    const newTriangleBField = parseFloat(newTriangleBFieldString);
    triangleBField.value = '';

    const triangleHField = document.getElementById('triangleH');
    const newTriangleHFieldString = triangleHField.value;
    const newTriangleHField = parseFloat(newTriangleHFieldString);
    triangleHField.value = '';


    const triangleGivenValueField = document.getElementById('triangleGivenValue');
    const newTriangleGivenValueString = triangleGivenValueField.innerText;
    const newTriangleGivenValue = parseFloat(newTriangleGivenValueString);

    const triangleResult = newTriangleGivenValue * newTriangleBField * newTriangleHField;
    console.log(triangleResult);

    const triangleFinalResultField = document.getElementById('triangleFinalResult');
    // const newTriangleFinalResultString = triangleFinalResultField.innerText;
    // const newTriangleFinalResult = parseFloat(newTriangleFinalResultString);
    triangleFinalResultField.innerText = triangleResult;

})

// Triangle Part End


// RectAngle part Start
document.getElementById('rectangleCalculation').addEventListener('click', function () {
    const rectangleWField = document.getElementById('rectangleW');
    const newRectangleWFieldString = rectangleWField.value;
    const newRectangleWField = parseFloat(newRectangleWFieldString);
    rectangleWField.value = '';

    const rectangleLField = document.getElementById('rectangleL');
    const newRectangleLFieldString = rectangleLField.value;
    const newRectangleLField = parseFloat(newRectangleLFieldString);
    rectangleLField.value = '';

    const RectAngleFinalResult = newRectangleWField * newRectangleLField;


    const rectangleFinalResultField = document.getElementById('rectangleFinalResult');
    rectangleFinalResultField.innerText = RectAngleFinalResult;
})


// parallelogram Calculation Start

document.getElementById('parallelogramCalculation').addEventListener('click', function () {
    const parallelogramBField = document.getElementById('parallelogramB');
    const newParallelogramBFieldString = parallelogramBField.value;
    const newParallelogramBField = parseFloat(newParallelogramBFieldString);
    parallelogramBField.value = '';


    const parallelogramHField = document.getElementById('parallelogramH');
    const newParallelogramHFieldString = parallelogramHField.value;
    const newParallelogramHField = parseFloat(newParallelogramHFieldString);
    parallelogramHField.value = '';

    const parallelogramResult = newParallelogramBField * newParallelogramHField;

    const parallelogramFinalResultField = document.getElementById('parallelogramFinalResult');
    parallelogramFinalResultField.innerText = parallelogramResult;
})