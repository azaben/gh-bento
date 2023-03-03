$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var time = $('input[name="time"]').val();
        var names = '';
         $('#form-name').children().each(function (i, elm) {
             names += $(elm).val() + '、';
         })
         names = names.slice(0, -1);
        var number = $('input[name="number"]:checked').val();
        

        var msg = `受け取り日：${date}\n時間：${time}\n弁当名：${names}\n個数：${number}`;
        sendText(msg);

        return false;
    });
});
