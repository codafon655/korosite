// - global -------------------------------------------------------------------
var screenCanvas, info;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var ctx; // canvas2d コンテキスト格納用

// - main ---------------------------------------------------------------------
window.onload = function(){

    // スクリーンの初期化
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 1000;
    screenCanvas.height = 1000;

    // 2dコンテキスト
    ctx = screenCanvas.getContext('2d');

    // イベントの登録
    screenCanvas.addEventListener('mousemove', mouseMove, true);
	screenCanvas.addEventListener('touchmove', touchMove, false);
    window.addEventListener('keydown', keyDown, true);

    // その他のエレメント関連
    info = document.getElementById('info');

    // レンダリング処理を呼び出す
    (function(){
        // HTMLを更新
  //      info.innerHTML = 'boee'+mouse.x + ':' + mouse.y+'ccc'+mouse.tmpx;

        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

        // パスの設定を開始
        ctx.beginPath();

        // 円の色を設定する
        ctx.fillStyle = 'rgba(0, 127, 255, 1)';

		var x1 =101;
		var y1 =194;
		var k1 =152;
		var s1 =11;

		var x2 =138;
		var y2 =291;
		var k2 =150;
		var s2 =11;

		var x3 =264;
		var y3 =434;
		var k3 =120;
		var s3 =9;

		var x4 =335;
		var y4 =107;
		var k4 =180;
		var s4 =12;

		var x5 =372;
		var y5 =357;
		var k5 =215;
		var s5 =13;

		var aa=Math.abs(mouse.x-x1)*Math.abs(mouse.x-x1) + Math.abs(mouse.y-y1)*Math.abs(mouse.y-y1)
		if(aa<k1){
        ctx.arc(mouse.x, mouse.y, s1, 0, Math.PI * 2, false);
		}else{
		// 円を描くパスを設定
        ctx.arc(x1+(mouse.x-x1)*Math.sqrt(k1/aa), y1+(mouse.y-y1)*Math.sqrt(k1/aa), s1, 0, Math.PI * 2, false);
		}

ctx.closePath();
		var aa=Math.abs(mouse.x2-x2)*Math.abs(mouse.x2-x2) + Math.abs(mouse.y2-y2)*Math.abs(mouse.y2-y2)
		if(aa<k2){
        ctx.arc(mouse.x2, mouse.y2, s2, 0, Math.PI * 2, false);
		}else{
		// 円を描くパスを設定
        ctx.arc(x2+(mouse.x2-x2)*Math.sqrt(k2/aa), y2+(mouse.y2-y2)*Math.sqrt(k2/aa), s2, 0, Math.PI * 2, false);
		}
ctx.closePath();
		var aa=Math.abs(mouse.x3-x3)*Math.abs(mouse.x3-x3) + Math.abs(mouse.y3-y3)*Math.abs(mouse.y3-y3)
		if(aa<k3){
        ctx.arc(mouse.x3, mouse.y3, s3, 0, Math.PI * 2, false);
		}else{
		// 円を描くパスを設定
        ctx.arc(x3+(mouse.x3-x3)*Math.sqrt(k3/aa), y3+(mouse.y3-y3)*Math.sqrt(k3/aa), s3, 0, Math.PI * 2, false);
		}
ctx.closePath();
		var aa=Math.abs(mouse.x4-x4)*Math.abs(mouse.x4-x4) + Math.abs(mouse.y4-y4)*Math.abs(mouse.y4-y4)
		if(aa<k4){
        ctx.arc(mouse.x4, mouse.y4, s4, 0, Math.PI * 2, false);
		}else{
		// 円を描くパスを設定
        ctx.arc(x4+(mouse.x4-x4)*Math.sqrt(k4/aa), y4+(mouse.y4-y4)*Math.sqrt(k4/aa), s4, 0, Math.PI * 2, false);
		}
ctx.closePath();
		var aa=Math.abs(mouse.x5-x5)*Math.abs(mouse.x5-x5)/1.5 + Math.abs(mouse.y5-y5)*Math.abs(mouse.y5-y5)
		if(aa<k5){
        ctx.arc(mouse.x5, mouse.y5, s5, 0, Math.PI * 2, false);
		}else{
		// 円を描くパスを設定
        ctx.arc(x5+(mouse.x5-x5)*Math.sqrt(k5/aa), y5+(mouse.y5-y5)*Math.sqrt(k5/aa), s5, 0, Math.PI * 2, false);
		}
ctx.closePath();

		//mouse.tmpx=aa;
        // 円を描く
        ctx.fill();

        // フラグにより再帰呼び出し
        if(run){setTimeout(arguments.callee, fps);}
    })();
};

// - event --------------------------------------------------------------------
function mouseMove(event){
    // マウスカーソル座標の更新
    mouse.x = event.clientX - screenCanvas.offsetLeft;
    mouse.y = event.clientY - screenCanvas.offsetTop;

mouse.x2=mouse.x;
mouse.y2=mouse.y;
mouse.x3=mouse.x;
mouse.y3=mouse.y;
mouse.x4=mouse.x;
mouse.y4=mouse.y;
mouse.x5=mouse.x;
mouse.y5=mouse.y;
}

function touchStart(event){
    // マウスカーソル座標の更新
 event.preventDefault();
    mouse.x = event.changedTouches[0].pageX;
    mouse.y = event.changedTouches[0].pageY;
}

function touchMove(event){
    // マウスカーソル座標の更新
 event.preventDefault();
    mouse.x = event.changedTouches[0].pageX;
    mouse.y = event.changedTouches[0].pageY;
mouse.x2=mouse.x;
mouse.y2=mouse.y;
mouse.x3=mouse.x;
mouse.y3=mouse.y;
mouse.x4=mouse.x;
mouse.y4=mouse.y;
mouse.x5=mouse.x;
mouse.y5=mouse.y;
}

function keyDown(event){
    // キーコードを取得
    var ck = event.keyCode;

    // Escキーが押されていたらフラグを降ろす
    if(ck === 27){run = false;}
}
function EXX2(){
    // Escキーが押されていたらフラグを降ろす
    if(run == false){run = true;}
	if(run == true){run = false;}
}
function EXX(){
    // Escキーが押されていたらフラグを降ろす
mouse.x=5000*(Math.random()-0.5);
mouse.y=5000*(Math.random()-0.5);
mouse.x2=5000*(Math.random()-0.5);
mouse.y2=5000*(Math.random()-0.5);
mouse.x3=5000*(Math.random()-0.5);
mouse.y3=5000*(Math.random()-0.5);
mouse.x4=5000*(Math.random()-0.5);
mouse.y4=5000*(Math.random()-0.5);
mouse.x5=5000*(Math.random()-0.5);
mouse.y5=5000*(Math.random()-0.5);
}

function DNG(){
    // Escキーが押されていたらフラグを降ろす
mouse.x=101;
mouse.y=194;
mouse.x2=138;
mouse.y2=291;
mouse.x3=264;
mouse.y3=434;
mouse.x4=335;
mouse.y4=107;
mouse.x5=372;
mouse.y5=357;
}