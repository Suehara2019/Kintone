(function () {
    "use strict";
     
    //詳細画面にYoutubeをインライン表示させる
    function displayYoutube(event) {
       
      // レコード情報を取得
      var record = event['record'];
       
      if (record['url']['value'] === undefined){return;}  //urlフィールドが未定義の場合は終了
      if (record['url']['value'].length == 0){return;}     //urlフィールドが空の場合は終了
       
      var youtubeUrl = record['url']['value']; //YoutubeのURLを取得
      youtubeUrl = youtubeUrl.replace('http://','https://');  //iframe内に表示できるように文字を置換
      youtubeUrl = youtubeUrl.replace('watch?v=','embed/');
       
      // Youtubeをインライン表示する div 要素を作成します
      var elYoutube = document.createElement('div');
      elYoutube.setAttribute('id', 'dsp_youtube');
      elYoutube.setAttribute('name', 'dsp_youtube');
       
      // Youtubeをインライン表示する div 要素の子要素にiframe要素を作成します
      var elIframe = document.createElement('iframe');
      elIframe.setAttribute('src', youtubeUrl);   //youtubeのURLをセット
      elIframe.setAttribute('style', 'width: 420px; height: 315px');
      elIframe.setAttribute('frameborder', '0');
      elYoutube.appendChild(elIframe);
    
      // 「youtube」スペース内に elYoutube で設定した要素を追加します
      var el = kintone.app.record.getSpaceElement('youtube');
      el.appendChild(elYoutube);
    
      // 「Youtube」スペースの親要素のサイズを変更します
      var elParent = el.parentNode;
      elParent.setAttribute('style', 'width: 420px; height: 315px');
    }
     
    // 詳細画面が開いた時のイベント
    kintone.events.on('app.record.detail.show', displayYoutube);
  })();
  