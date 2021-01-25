$(function () {
    let res = 0;
    $.ajax({
        type: "POST",
        url: "php/Load.php",
        success: function (answer) {
            $('.result').append(answer);
        }
    })
    $('.game').on('click', function (){
        setTimeout(func, 20000)
        let res = 0;
        $('#point').on('click', function (){
            x1 = randomInteger(-1.5, 1.5);
            y1 = randomInteger(-1.5, 1.5);
            r1 = randomInteger(1, 2);
            setPoint(y1, x1, r1);
            res += 1;
        })
        function func(){
            $('#point').attr('onclick','').unbind('click');
        }
    })
    $('#send').on('click', function (event) {
        xyr()
        if(checkY(y, r, x)){
            $.ajax({
                type: "POST",
                url: "php/Check.php",
                data: {Y: y, X: x, R: r},
                success: function (answer) {
                    $('.result').append(answer);
                }
            })
        }
        event.preventDefault()
    })
    $('#clear').on('click', function () {
        $.ajax({
            type: "POST",
            url: "php/Clear.php",
            success: function () {
                $('.resultFromPhp').remove();
            }
        })
    })
    $('.x-button').on('click', function (){
        xyr()
        checkY(y, r, x)
    })
    $('.yInput').on('input', function (){
        xyr()
        checkY(y, r, x)
    })
    $('.rInput').on('input', function (){
        xyr()
        checkY(y, r, x)
    })
})

function xyr(){
    y = $('.yInput').val()
    r = $('.rInput').val()
    $('.x-button').each(function() {
        if ($(this).hasClass('x-button-active')){
            x = $(this).find('span').text();
        }
    });
}

function checkY(y, r, x) {
    if (!y) {
        showError('<br>Вы не ввели Y')
        setPoint(0,0, 1)
        return false
    } else if (y < -3 || y > 5) {
        showError('<br>Y не принадлежит [-3:5]')
        setPoint(0,0, 1)
        return false
    } else if (isNaN(y)) {
        showError('<br>Y должен быть числом')
        setPoint(0,0, 1)
        return false
    } else {
        $('.error').html('')
        setPoint(y, x, r)
        return true

    }
}
function showError(message) {
    $('.error').css({'color': 'white', 'font-size': 'medium'}).html(message)
}
function setPoint(y, x, r) {
    $('#point').attr("cx", (x * 100 / r + 150))
        .attr("cy", (y * -100 / r + 150));
}
function randomInteger(min, max) {
    return Math.random() * (max - min) + min;
}