jQuery.noConflict();
(function($) {
   "use strict";
    var myevent = ['app.record.detail.show',
                   'app.record.create.show',
                   'app.record.edit.show',
                   'app.record.create.change.ラジオボタン_1',
                   'app.record.edit.change.ラジオボタン_1'];
    kintone.events.on(myevent, function(e) {
        var record = e.record;
        var radioButtonValue = record.ラジオボタン_1.value;
        
        //グループフィールド開閉APIを用いて、まず全てのグループフィールドを閉じる
        kintone.app.record.setGroupFieldOpen('Ct', false);
        kintone.app.record.setGroupFieldOpen('PF', false);
        kintone.app.record.setGroupFieldOpen('Udemyデモ払出詳細', false);

        //ラジオボタンの値によって開くグループフィールドを切り替える
        switch (radioButtonValue) {
            case '【HITO】コンテンツのみ' :
                kintone.app.record.setGroupFieldOpen('Ct', true);
                break;
            case "【HITO】PFのみ":
                kintone.app.record.setGroupFieldOpen('PF', true);
                break;
            case "【HITO】コンテンツ＆PF_両方":
                kintone.app.record.setGroupFieldOpen('Ct', true);
                kintone.app.record.setGroupFieldOpen('PF', true);
                break;
            case "【Udemy】コンテンツ":
                kintone.app.record.setGroupFieldOpen('Udemyデモ払出詳細', true);
                break;
        }
    });
})(jQuery);