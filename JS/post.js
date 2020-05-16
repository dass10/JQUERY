$(function (){

var  $orders = $('#orders');

$.ajax({
    type: 'Get',
    url: '/api/orders',
    success: function (orders) {
        $.each(orders, function (order) {
            $orders.append('<li>name: ' + order.name + ', food: ' + order.food + '</li>');
        });
    },
    error: function () {
        alert('error loading orders');
    }


    });

    });

